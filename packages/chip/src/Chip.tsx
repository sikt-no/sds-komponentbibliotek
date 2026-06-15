import { AddAltIcon, SubtractAltIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { ButtonHTMLAttributes, ReactNode } from "react";
import "./chip.css";

interface ChipBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * If the component is in a checked, active, pressed state or not.
   */
  checked?: boolean;
  children: ReactNode;
  /**
   * When true the component has two states (on/off), otherwise it is only dismissible and should be removed when not active.
   *
   * @default undefined
   */
  toggle?: boolean;
}

const ChipBase = ({
  className,
  children,
  onClick,
  checked = false,
  toggle,
  ...rest
}: ChipBaseProps) => {
  return (
    <button
      className={clsx(
        "sds-chip",
        toggle && "sds-chip--toggle",
        checked && "sds-chip--checked",
        className,
      )}
      onClick={onClick}
      aria-pressed={toggle && checked}
      {...rest}
    >
      <span className="sds-chip__label">{children}</span>
      <span className="sds-chip__icon">
        {checked && toggle ? <SubtractAltIcon /> : <AddAltIcon />}
      </span>
    </button>
  );
};

export type ChipToggleProps = Omit<ChipBaseProps, "toggle">;
export const ChipToggle = (props: ChipToggleProps) => (
  <ChipBase {...props} toggle />
);
ChipToggle.displayName = "ChipToggle";

export type ChipButtonProps = Omit<ChipBaseProps, "toggle" | "checked">;
export const ChipButton = (props: ChipButtonProps) => (
  <ChipBase {...props} checked />
);
ChipButton.displayName = "ChipButton";
