export const isToken = (node) =>
  typeof node === "object" &&
  node !== null &&
  "$type" in node &&
  "$value" in node;

export const getIn = (node, keyPath) =>
  keyPath.reduce((acc, key) => (acc ? acc[key] : undefined), node);

/**
 * Walks the base tree and attaches an `$extensions.modes` entry for each
 * alternate mode, sourced from the matching path in that mode's own token
 * file. Optionally transforms each token (base and mode variants) via
 * `transformToken`; `warnLabel` prefixes missing-token warnings.
 */
export const buildModeAwareTree = (
  node,
  modeTrees,
  { transformToken = (token) => token, warnLabel } = {},
  keyPath = [],
) => {
  if (isToken(node)) {
    const modes = {};
    for (const [modeKey, modeTree] of Object.entries(modeTrees)) {
      const modeToken = getIn(modeTree, keyPath);
      if (!isToken(modeToken)) {
        console.warn(
          `[${warnLabel}] Missing token at "${keyPath.join(".")}" in mode "${modeKey}", skipping.`,
        );
        continue;
      }
      modes[modeKey] = transformToken(modeToken);
    }
    return {
      ...transformToken(node),
      $extensions: {
        ...node.$extensions,
        modes,
      },
    };
  }

  if (typeof node !== "object" || node === null) return node;

  return Object.fromEntries(
    Object.entries(node)
      // Skip DTCG metadata keys — they aren't part of the token tree.
      .filter(([key]) => !key.startsWith("$"))
      .map(([key, value]) => [
        key,
        buildModeAwareTree(value, modeTrees, { transformToken, warnLabel }, [
          ...keyPath,
          key,
        ]),
      ]),
  );
};
