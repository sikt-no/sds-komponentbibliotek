describe("Button", () => {
  describe("a11y", () => {
    it("should be accessible", async () => {
      //const { container } = render(<{{pascalCase name}} />);
      //expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("api", () => {
    it("should render", async () => {
      //render(<{{pascalCase name}} data-testid="test" />);
      expect("sd3-{{kebabCase name}}").toEqual("sd3-{{kebabCase name}}");
    });
  });
});
