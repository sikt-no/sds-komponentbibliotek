import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./card.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Change card orientation.
   *
   * @default "vertical"
   */
  variant?: "vertical" | "horizontal";
}
export type CardImageProps = HTMLAttributes<HTMLDivElement>;
export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardImage = ({ ...rest }: CardImageProps) => {
  return <div data-part="image" {...rest} />;
};
CardImage.displayName = "Card.Image";

export const CardContent = ({ ...rest }: CardContentProps) => {
  return <div data-part="content" {...rest} />;
};
CardContent.displayName = "Card.Content";

export const Card = ({
  className,
  variant = "vertical",
  ...rest
}: CardProps) => {
  return (
    <div
      className={clsx("sd3-card", className)}
      data-variant={variant}
      {...rest}
    />
  );
};

Card.displayName = "Card";
Card.Image = CardImage;
Card.Content = CardContent;
