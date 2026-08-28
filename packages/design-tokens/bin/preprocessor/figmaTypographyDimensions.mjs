const isToken = (node) =>
  typeof node === "object" &&
  node !== null &&
  "$type" in node &&
  "$value" in node;

const round = (value) => Math.round(value * 1000) / 1000;

/**
 * Walks the size tree and retypes every token (and its modes) from
 * "number" to "dimension", leaving the value untouched.
 */
const buildDimensionTree = (node) => {
  if (isToken(node)) {
    const modes = Object.fromEntries(
      Object.entries(node.$extensions?.modes ?? {}).map(
        ([modeKey, modeToken]) => [
          modeKey,
          { ...modeToken, $type: "dimension" },
        ],
      ),
    );
    return {
      ...node,
      $type: "dimension",
      $extensions: {
        ...node.$extensions,
        modes,
      },
    };
  }

  return Object.fromEntries(
    Object.entries(node).map(([key, value]) => [
      key,
      buildDimensionTree(value),
    ]),
  );
};

/**
 * Walks the line-height tree and, at each token, divides its value (and
 * each mode's value) by the matching path's size value, retyping the
 * result to "ratio".
 */
const buildRatioTree = (node, sizeNode, keyPath = []) => {
  if (isToken(node)) {
    if (!isToken(sizeNode)) {
      console.warn(
        `[preprocessor/figma/typography/dimensions] Missing size token at "${keyPath.join(".")}", skipping ratio conversion.`,
      );
      return node;
    }

    const modes = {};
    for (const [modeKey, lineHeightMode] of Object.entries(
      node.$extensions?.modes ?? {},
    )) {
      const sizeMode = sizeNode.$extensions?.modes?.[modeKey];
      if (!isToken(sizeMode)) {
        console.warn(
          `[preprocessor/figma/typography/dimensions] Missing size token at "${keyPath.join(".")}" in mode "${modeKey}", skipping ratio conversion.`,
        );
        continue;
      }
      modes[modeKey] = {
        $type: "ratio",
        $value: round(lineHeightMode.$value / sizeMode.$value),
      };
    }

    return {
      ...node,
      $type: "ratio",
      $value: round(node.$value / sizeNode.$value),
      $extensions: {
        ...node.$extensions,
        modes,
      },
    };
  }

  return Object.fromEntries(
    Object.entries(node).map(([key, value]) => [
      key,
      buildRatioTree(value, sizeNode?.[key], [...keyPath, key]),
    ]),
  );
};

export const figmaTypographyDimensionsPreprocessor = {
  name: "preprocessor/figma/typography/dimensions",
  preprocessor: (dict) => {
    dict.typography = {
      ...dict.typography,
      size: buildDimensionTree(dict.typography.size),
      "line-height": buildRatioTree(
        dict.typography["line-height"],
        dict.typography.size,
      ),
    };

    return dict;
  },
};
