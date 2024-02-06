import clsx from "clsx";
import { WarningIcon } from "@sikt/sds-icons";
import * as style from "./notice.module.css";

export const Notice = ({ heading, children }) => {
  return (
    <div className={style.notice}>
      <WarningIcon className={style.notice__icon} />
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
