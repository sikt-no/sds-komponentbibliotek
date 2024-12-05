import { Button } from "@sikt/sds-button";
import { Heading1, Paragraph } from "@sikt/sds-core";
import { XIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  HTMLAttributes,
  ReactNode,
  useRef,
  useState,
  useId,
  useEffect,
} from "react";
import "./dialog.pcss";
import useWindowResize from "./useWindowResize";

export interface DialogBaseProps extends HTMLAttributes<HTMLDialogElement> {
  children: ReactNode;
  className?: string;
  /**
   * Specifies the ARIA label for the modal when the heading alone does not sufficiently describe the content.
   * This property should only be used when the heading alone is not enough to provide an adequate description of the content.
   */
  "aria-label"?: string;
  /**
   * Specifies whether the modal is dismissable or not. When set to `false`, the user is required to take an action and cannot dismiss the modal using the following methods:
   * - Pressing the "Esc" key
   * - Clicking on the overlay
   * - Clicking on the close button
   */
  footer?: ReactNode;
  heading: string;
  onClose: () => void;
  open: boolean;
  subheading?: string;
}

export type DialogProps = DialogBaseProps &
  (
    | {
        dismissable: false;
        closeButtonLabel?: never;
        closeButtonAriaLabel?: never;
      }
    | {
        dismissable: true;
        closeButtonLabel: string;
        closeButtonAriaLabel?: never;
      }
    | {
        dismissable: true;
        closeButtonLabel?: never;
        closeButtonAriaLabel: string;
      }
  );

export const Dialog = ({
  children,
  className,
  "aria-label": contentLabel,
  closeButtonLabel,
  closeButtonAriaLabel,
  dismissable = true,
  footer,
  heading,
  onClose,
  open,
  subheading,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleBackdropClick = (event: MouseEvent) => {
    if (dismissable) {
      const bounds = (
        event.target as HTMLDialogElement
      ).getBoundingClientRect();
      if (
        bounds.left > event.clientX ||
        bounds.right < event.clientX ||
        bounds.top > event.clientY ||
        bounds.bottom < event.clientY
      )
        onClose();
    }
  };

  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      if (dismissable) {
        onClose();
      } else {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        dialogRef.current.showModal();
        dialogRef.current.addEventListener("click", handleBackdropClick);
        document.addEventListener("keydown", handleEscapeKey);
        document.body.style.overflow = "hidden";
      } else {
        dialogRef.current.close();
        dialogRef.current.removeEventListener("click", handleBackdropClick);
        document.removeEventListener("keydown", handleEscapeKey);
        document.body.style.overflow = "unset";
      }
    }

    return () => {
      if (dialogRef.current) {
        dialogRef.current.removeEventListener("click", handleBackdropClick);
      }

      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const checkScroll = () => {
    if (contentRef.current) {
      setIsScrolling(
        contentRef.current.clientHeight < contentRef.current.scrollHeight,
      );
    }
  };

  const id = useId();
  const headingId = `${id}-heading`;
  const contentId = `${id}-content`;

  useWindowResize(checkScroll, { throttleTime: 200 });
  useEffect(checkScroll, [children]);

  return (
    <dialog
      className={clsx(
        "sds-dialog",
        isScrolling && "sds-dialog--scrollable",
        className,
      )}
      aria-labelledby={contentLabel ? undefined : headingId}
      aria-describedby={contentLabel ? undefined : contentId}
      aria-label={contentLabel}
      ref={dialogRef}
    >
      <header className="sds-dialog__header">
        <div
          id={headingId}
          data-testid="headings"
          className="sds-dialog__heading"
        >
          <Heading1 variant="medium">{heading}</Heading1>
          {subheading !== undefined && <Paragraph>{subheading}</Paragraph>}
        </div>

        {dismissable && (
          <Button
            variant="transparent"
            icon={<XIcon />}
            className="sds-dialog__close-button"
            onClick={onClose}
            aria-label={closeButtonLabel ? undefined : closeButtonAriaLabel}
          >
            {closeButtonLabel}
          </Button>
        )}
      </header>
      <div className="sds-dialog__content-wrapper" ref={contentRef}>
        <div
          id={contentId}
          data-testid="content"
          className="sds-dialog__content"
        >
          {children}
        </div>
        {footer !== undefined && (
          <div className="sds-dialog__footer">{footer}</div>
        )}
      </div>
    </dialog>
  );
};

Dialog.displayName = "Dialog";
export default Dialog;
