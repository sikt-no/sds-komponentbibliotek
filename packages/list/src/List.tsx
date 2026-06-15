import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";
import "./list.css";

export interface ListProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

interface ListTypes {
  listType: "unordered" | "ordered" | "description";
}

const List = ({
  children,
  className,
  listType,
  ...rest
}: ListProps & ListTypes) => {
  const C =
    listType === "description" ? "dl" : listType === "ordered" ? "ol" : "ul";
  return (
    <C
      className={clsx(
        listType === "description"
          ? "sds-description-list"
          : `sds-list sds-list--${listType}`,
        className,
      )}
      {...rest}
    >
      {children}
    </C>
  );
};

export const UnorderedList = (props: ListProps) =>
  List({ ...props, listType: "unordered" });
UnorderedList.displayName = "UnorderedList";

export const OrderedList = (props: ListProps) =>
  List({ ...props, listType: "ordered" });
OrderedList.displayName = "OrderedList";

export const DescriptionList = (props: ListProps) =>
  List({ ...props, listType: "description" });
DescriptionList.displayName = "DescriptionList";
