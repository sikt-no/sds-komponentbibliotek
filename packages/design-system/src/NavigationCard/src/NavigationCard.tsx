import { Slot, Slottable } from "@radix-ui/react-slot";
import { MoveToNextIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import "./navigation-card.css";
import { Paragraph, ParagraphProps } from "../../../index";
import { SizeDensity } from "../../../types";

export interface NavigationCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: SizeDensity;
  /**
   * Use to change element type into alternative React component. Useful with libraries that require their own routing components.
   *
   * For example `<NavigationCard asChild><NextLink>` would result in a `<NextLink>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
}
export type NavigationCardIconProps = HTMLAttributes<HTMLDivElement>;
export type NavigationCardHeadingProps = HTMLAttributes<HTMLParagraphElement>;
export type NavigationCardBodyProps = ParagraphProps;
export type NavigationCardContentProps = HTMLAttributes<HTMLDivElement>;

const NavigationCardIcon = ({ ...rest }: NavigationCardIconProps) => (
  <div data-part="icon" {...rest} />
);
NavigationCardIcon.displayName = "NavigationCardIcon";

const NavigationCardHeading = ({
  children,
  ...rest
}: NavigationCardHeadingProps) => (
  <p data-part="heading" {...rest}>
    {children}
  </p>
);
NavigationCardHeading.displayName = "NavigationCardHeading";

const NavigationCardBody = ({ ...rest }: NavigationCardBodyProps) => (
  <Paragraph {...rest} />
);
NavigationCardBody.displayName = "NavigationCardBody";

const NavigationCardContent = ({ ...rest }: NavigationCardContentProps) => (
  <div data-part="content" {...rest} />
);
NavigationCardContent.displayName = "NavigationCardContent";

export const NavigationCard = ({
  className,
  children,
  size = "standard",
  asChild = false,
  ...rest
}: NavigationCardProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={clsx("sd3-navigation-card", className)}
      data-size={size}
      {...rest}
    >
      <Slottable>{children}</Slottable>
      <div data-part="nav-icon">
        <MoveToNextIcon />
      </div>
    </Comp>
  );
};

NavigationCard.displayName = "NavigationCard";
NavigationCard.Icon = NavigationCardIcon;
NavigationCard.Heading = NavigationCardHeading;
NavigationCard.Body = NavigationCardBody;
NavigationCard.Content = NavigationCardContent;
