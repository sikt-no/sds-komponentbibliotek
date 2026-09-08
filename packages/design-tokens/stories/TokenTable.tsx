/* istanbul ignore file */
interface TokenLeaf {
  $value: unknown;
  path: string[];
}
type TokenTree = TokenLeaf | { [key: string]: TokenTree };

function isLeaf(tree: TokenTree): tree is TokenLeaf {
  return typeof tree === "object" && "$value" in tree;
}

function flattenTokens(
  tree: TokenTree,
  name: string[] = [],
): { name: string; value: unknown; cssVar: string }[] {
  if (isLeaf(tree)) {
    return [
      {
        name:
          name.length > 0 ? name.join("-") : tree.path[tree.path.length - 1],
        value: tree.$value,
        cssVar: `--sd3-${tree.path.join("-")}`,
      },
    ];
  }
  return Object.entries(tree).flatMap(([key, value]) =>
    flattenTokens(value, [...name, key]),
  );
}

export function ValueTable({ category }: { category: TokenTree }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
        {flattenTokens(category).map((token) => (
          <tr key={token.cssVar}>
            <td>{token.name}</td>
            <td>{String(token.value)}</td>
            <td>
              <code>{token.cssVar}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ColorTable({ category }: { category: TokenTree }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Swatch</th>
          <th>Token</th>
        </tr>
      </thead>
      <tbody>
        {flattenTokens(category).map((token) => (
          <tr key={token.cssVar}>
            <td>{token.name}</td>
            <td aria-label={token.cssVar}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 4,
                  border: "1px solid var(--sd3-color-border-subtle, #ccc)",
                  background: `var(${token.cssVar})`,
                }}
              />
            </td>
            <td>
              <code>{token.cssVar}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
