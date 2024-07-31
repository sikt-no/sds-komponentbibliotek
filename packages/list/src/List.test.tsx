import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { DescriptionDetails } from "./DescriptionDetails";
import { DescriptionTerm } from "./DescriptionTerm";
import { DescriptionList, OrderedList, UnorderedList } from "./List";
import { ListItem } from "./ListItem";

const listTypes = [
  { name: "ordered", component: OrderedList },
  { name: "unordered", component: UnorderedList },
];

describe("List", () => {
  describe("a11y", () => {
    listTypes.map((listType) => {
      it(`${listType.name} should be accessible`, async () => {
        const { component: List } = listType;
        const { container } = render(
          <List>
            <ListItem>Foo</ListItem>
            <ListItem>Bar</ListItem>
            <ListItem>Baz</ListItem>
          </List>,
        );

        expect(await axe(container)).toHaveNoViolations();
      });
    });

    it("description list should be accessible", async () => {
      const { container } = render(
        <DescriptionList>
          <DescriptionTerm>Foo</DescriptionTerm>
          <DescriptionDetails>Bar</DescriptionDetails>
        </DescriptionList>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    listTypes.map((listType) => {
      it(`${listType.name} should render`, async () => {
        const { name, component: List } = listType;
        render(
          <List data-testid={name}>
            <ListItem>Foo</ListItem>
            <ListItem>Bar</ListItem>
            <ListItem>Baz</ListItem>
          </List>,
        );

        expect(screen.getByText("Foo")).toBeInTheDocument();
        expect(screen.getByText("Bar")).toBeInTheDocument();
        expect(screen.getByText("Baz")).toBeInTheDocument();
        expect(screen.getByTestId(name)).toHaveClass("sds-list");
        expect(screen.getByTestId(name)).toBeInTheDocument();
      });
    });

    it("description list should render", async () => {
      render(
        <DescriptionList data-testid="test">
          <DescriptionTerm>Foo</DescriptionTerm>
          <DescriptionDetails>Bar</DescriptionDetails>
        </DescriptionList>,
      );

      expect(screen.getByText("Foo")).toBeInTheDocument();
      expect(screen.getByText("Bar")).toBeInTheDocument();
      expect(screen.getByTestId("test")).toHaveClass("sds-description-list");
    });

    it("unordered list should have element & modifier class", async () => {
      render(
        <UnorderedList data-testid="test">
          <ListItem>Foo</ListItem>
          <ListItem>Bar</ListItem>
          <ListItem>Baz</ListItem>
        </UnorderedList>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-list--unordered");
      expect(screen.getByTestId("test")).not.toHaveClass("sds-list--ordered");
    });

    it("ordered list should have element & modifier class", async () => {
      render(
        <OrderedList data-testid="test">
          <ListItem>Foo</ListItem>
          <ListItem>Bar</ListItem>
          <ListItem>Baz</ListItem>
        </OrderedList>,
      );

      expect(screen.getByTestId("test")).toHaveClass("sds-list--ordered");
      expect(screen.getByTestId("test")).not.toHaveClass("sds-list--unordered");
    });
  });
});
