const template = (variables, { tpl }) => {
  return tpl`
import { SVGAttributes } from "react";
import { clsx } from "clsx/lite";

export type IconProps = SVGAttributes<SVGElement>;

const ${variables.componentName} = ({ className, ...props }: IconProps) => (
  ${variables.jsx}
);
${variables.componentName}.displayName = "${variables.componentName}";
${variables.exports};
`;
};

module.exports = template;
