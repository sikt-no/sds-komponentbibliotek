import {
  Link,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
} from "@sikt/sds-core";
import { ListItem, OrderedList, UnorderedList } from "@sikt/sds-list";
import {
  Table,
  TableHead,
  TableBody,
  TableHeader,
  TableCell,
  TableRow,
} from "@sikt/sds-table";
export const MdxComponents = {
  a: Link,
  h1: Heading1,
  h2: (props) => <Heading2 {...props} size="s" />,
  h3: (props) => <Heading3 {...props} size="xs" />,
  h4: (props) => <Heading4 {...props} size="xxs" />,
  h5: (props) => <Heading5 {...props} size="xxs" />,
  h6: (props) => <Heading6 {...props} size="xxs" />,
  li: ListItem,
  ol: OrderedList,
  p: Paragraph,
  ul: UnorderedList,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  th: TableHeader,
  td: (props) => <TableCell {...props} data-th={undefined} />,
  tr: TableRow,
};
