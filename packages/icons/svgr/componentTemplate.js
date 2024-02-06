const template = (variables, { tpl }) => {
  return tpl`
import { SVGAttributes } from "react";
import clsx from "clsx";

export type IconProps = SVGAttributes<SVGElement>;

const ${variables.componentName} = ({ className, ...props }: IconProps) => (
  ${variables.jsx}
);

${variables.exports};
`;
};

module.exports = template;
