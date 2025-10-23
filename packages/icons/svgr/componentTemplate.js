const template = (variables, { tpl }) => {
  // Remove Svg prefix added by @svgr/core getComponentName
  const componentName = variables.componentName.replace("Svg", "");
  const displayName = `${componentName}Icon`;

  return tpl`
import { SVGAttributes } from "react";
import { clsx } from "clsx/lite";

export type IconProps = SVGAttributes<SVGElement>;

const ${variables.componentName} = ({ className, ...props }: IconProps) => (
  ${variables.jsx}
);
${variables.componentName}.displayName = "${displayName}";
${variables.exports};
`;
};

module.exports = template;
