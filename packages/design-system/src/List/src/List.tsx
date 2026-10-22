import { clsx } from "clsx/lite";
import { HTMLAttributes, LiHTMLAttributes, OlHTMLAttributes } from "react";
import "./list.css";

export type UnorderedListProps = HTMLAttributes<HTMLUListElement>;
export type OrderedListProps = OlHTMLAttributes<HTMLOListElement>;
export type DescriptionProps = HTMLAttributes<HTMLElement>;

interface ListVariants {
  variant: "description" | "unordered" | "ordered";
}

const ListComponents = {
  description: "dl",
  unordered: "ul",
  ordered: "ol",
} as const;

export type ListItemProps = LiHTMLAttributes<HTMLLIElement>;

type ListProps = UnorderedListProps | OrderedListProps | DescriptionProps;

const ListRoot = ({
  className,
  variant,
  ...rest
}: ListProps & ListVariants) => {
  const Comp = ListComponents[variant];

  return (
    <Comp
      className={clsx("sd3-list", className)}
      data-variant={variant}
      {...rest}
    />
  );
};

const ListItem = (rest: ListItemProps) => (
  <li data-part="list-item" {...rest} />
);
ListItem.displayName = "List.Item";

const DescriptionTerm = (rest: DescriptionProps) => (
  <dt data-part="description-term" {...rest} />
);
DescriptionTerm.displayName = "List.Term";

const DescriptionDetails = (rest: DescriptionProps) => (
  <dd data-part="description-details" {...rest} />
);
DescriptionDetails.displayName = "List.Details";

const UnorderedList = (rest: UnorderedListProps) => (
  <ListRoot {...rest} variant="unordered" />
);
UnorderedList.displayName = "List.Unordered";

const OrderedList = (rest: OrderedListProps) => (
  <ListRoot {...rest} variant="ordered" />
);
OrderedList.displayName = "List.Ordered";

const DescriptionList = (rest: UnorderedListProps) => (
  <ListRoot {...rest} variant="description" />
);
DescriptionList.displayName = "List.Description";

export const List = {
  Unordered: UnorderedList,
  Ordered: OrderedList,
  Description: DescriptionList,
  Item: ListItem,
  Term: DescriptionTerm,
  Details: DescriptionDetails,
};
