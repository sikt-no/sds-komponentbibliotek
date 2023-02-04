import React, { SVGAttributes } from "react";
import clsx from "clsx";
import SdsIcons from "./dist/sds-icons.svg";
import "./icon.pcss";

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: string;
}

export const Icon = ({ icon, className }: IconProps) => (
  <svg className={clsx("sds-icon", className)} aria-hidden="true">
    <use href={`${SdsIcons}#${icon}`}></use>
  </svg>
);
