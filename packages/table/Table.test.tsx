import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Table } from "./Table";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableRow } from "./TableRow";
import { TableHeader } from "./TableHeader";
import { TableCell } from "./TableCell";
import { TableFoot } from "./TableFoot";

describe("Table", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      const { container } = render(
        <Table caption="Caption">
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Age</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell data-th="Name">Bill</TableCell>
              <TableCell data-th="Age">37</TableCell>
            </TableRow>
            <TableRow>
              <TableCell data-th="Name">John</TableCell>
              <TableCell data-th="Age">40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell data-th="Name">Aaron</TableCell>
              <TableCell data-th="Age">21</TableCell>
            </TableRow>
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableCell data-th="Name">Summary</TableCell>
              <TableCell data-th="Age">98</TableCell>
            </TableRow>
          </TableFoot>
        </Table>,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      render(
        <Table caption="Caption" wrapperProps={{ "data-testid": "wrapper" }} />,
      );

      const table = screen.getByRole("table");
      expect(screen.getByTestId("wrapper")).toHaveClass("sds-table");
      expect(table).toHaveClass("sds-table__table");
    });

    it("should have class name", async () => {
      render(
        <Table
          caption="Caption"
          data-testid="test"
          className="test-class-name"
          wrapperProps={{ "data-testid": "wrapper" }}
        />,
      );

      expect(screen.getByTestId("wrapper")).toHaveClass(
        "sds-table test-class-name",
      );
    });

    it("should have caption", async () => {
      render(<Table caption="Caption" showCaption />);

      expect(screen.getByRole("table")).toHaveAccessibleName("Caption");
      expect(screen.getByText("Caption")).toBeVisible();
    });

    it("should have table head with column headers", async () => {
      render(
        <Table caption="Caption">
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Age</TableHeader>
            </TableRow>
          </TableHead>
        </Table>,
      );

      const headers = within(screen.getByRole("rowgroup")).getAllByRole(
        "columnheader",
      );
      expect(headers.length).toBe(2);
      expect(headers[0]).toHaveTextContent("Name");
      expect(headers[1]).toHaveTextContent("Age");
    });

    it("should have table body with rows and cells", async () => {
      render(
        <Table caption="Caption">
          <TableBody>
            <TableRow>
              <TableCell data-th="Name">Bill</TableCell>
              <TableCell data-th="Age">37</TableCell>
            </TableRow>
            <TableRow>
              <TableCell data-th="Name">John</TableCell>
              <TableCell data-th="Age">40</TableCell>
            </TableRow>
            <TableRow>
              <TableCell data-th="Name">Aaron</TableCell>
              <TableCell data-th="Age">21</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );

      const rows = within(screen.getByRole("rowgroup")).getAllByRole("row");
      expect(rows.length).toBe(3);

      const cells = within(rows[1]).getAllByRole("cell");
      expect(cells.length).toBe(2);
      expect(cells[0]).toHaveTextContent("John");
      expect(cells[1]).toHaveTextContent("40");
    });
  });
});
