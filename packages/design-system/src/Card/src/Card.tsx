import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./card.css";
import { Direction } from "../../../types";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Change card orientation.
   *
   * @default "vertical"
   */
  direction?: Direction;
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
  direction = "vertical",
  ...rest
}: CardProps) => {
  return (
    <div
      className={clsx("sd3-card", className)}
      data-direction={direction}
      {...rest}
    />
  );
};

Card.displayName = "Card";
Card.Image = CardImage;
Card.Content = CardContent;
