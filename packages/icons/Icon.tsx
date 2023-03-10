import React, { SVGAttributes } from "react";
import clsx from "clsx";
import * as config from "./icons.config";
import SdsIcons from "./dist/sds-icons.svg";
import "./icon.pcss";

type IconType = (typeof config.icons)[number];

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: IconType;
}

export const Icon = ({ icon, className, ...rest }: IconProps) => (
  <svg className={clsx("sds-icon", className)} aria-hidden="true" {...rest}>
    <use href={`${SdsIcons}#${icon}`}></use>
  </svg>
);
