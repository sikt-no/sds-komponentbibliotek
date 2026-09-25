import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { SizeDensity } from "../../../../types";
import "./link.css";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: ReactNode;
  /**
   * NOTE: You should probably not use this but let the link inherit it's size from the surrounding text.
   * Override `font-size` inheritance.
   */
  size?: SizeDensity;
  /**
   * Adds icon to external links. The same are default on `target="_blank"`.
   */
  isExternal?: boolean;
  /**
   * Hide default icons for `target="_blank"`, `href="mailto:"` & `href="tel:"`.
   */
  hideIcon?: boolean;
  /**
   * Use to change element type into alternative React component. Useful with libraries that require their own routing components.
   *
   * For example `<Link asChild><NextLink>` would result in a `<NextLink>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
}

export interface LinkIconProps {
  children: ReactNode;
}

/**
 * Place before or after the link text to show an icon on that side.
 * Pass an icon from `@sikt/sds-icons`.
 */
const LinkIcon = ({ children }: LinkIconProps) => (
  <span data-part="icon">{children}</span>
);
LinkIcon.displayName = "Link.Icon";

const dataIsValue = (isExternal, hideIcon) => {
  if (hideIcon) return "hide-icon"; // hideIcon wins, even for external links
  if (isExternal) return "external";
  return undefined;
};

const LinkBase = ({
  children,
  className,
  size,
  isExternal,
  hideIcon = false,
  asChild = false,
  ...rest
}: LinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={clsx("sd3-typography", className)}
      data-variant="link"
      data-size={size}
      data-is={dataIsValue(isExternal, hideIcon)}
      {...rest}
    >
      <Slottable>{children}</Slottable>
    </Comp>
  );
};
LinkBase.displayName = "Link";

const Link = Object.assign(LinkBase, {
  Icon: LinkIcon,
});

export { Link };
