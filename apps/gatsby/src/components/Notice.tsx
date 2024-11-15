import { ReactNode } from "react";
import { clsx } from "clsx/lite";
import { AlertIcon } from "@sikt/sds-icons";
import * as style from "./notice.module.css";

export const Notice = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div className={style.notice}>
      <AlertIcon className={style.notice__icon} />
      <div
        className={clsx(
          style.notice__heading,
          "sds-typography-heading--paragraph",
        )}
      >
        {heading}
      </div>
      <div className="sds-typography-body--small">{children}</div>
    </div>
  );
};
