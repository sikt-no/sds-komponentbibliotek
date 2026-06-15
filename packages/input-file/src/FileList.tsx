import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./file-list.css";

export interface FileListProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  figCaption?: string;
}

export const FileList = ({
  children,
  className,
  figCaption,
  ...rest
}: FileListProps) => {
  return (
    <figure className={clsx("sds-input-file-list", className)} {...rest}>
      {figCaption && (
        <figcaption className="sds-input-file-list__caption sds-typography-label">
          {figCaption}
        </figcaption>
      )}
      <ul className="sds-input-file-list__list">{children}</ul>
    </figure>
  );
};
FileList.displayName = "FileList";
