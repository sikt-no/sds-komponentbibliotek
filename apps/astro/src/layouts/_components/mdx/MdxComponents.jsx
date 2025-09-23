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
};
