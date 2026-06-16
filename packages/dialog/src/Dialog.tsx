import { Button } from "@sikt/sds-button";
import { Heading1, Paragraph } from "@sikt/sds-core";
import { useClickOutside, useKeydown, useWindowResize } from "@sikt/sds-hooks";
import { CancelIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import {
  HTMLAttributes,
  ReactNode,
  useRef,
  useState,
  useId,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./dialog.css";

export interface DialogBaseProps extends HTMLAttributes<HTMLDialogElement> {
  children: ReactNode;
  className?: string;
  /**
   * Specifies the ARIA label for the modal when the heading alone does not sufficiently describe the content.
   * This property should only be used when the heading alone is not enough to provide an adequate description of the content.
   */
  "aria-label"?: NonNullable<string>;
  /**
   * - any (default): The dialog can be dismissed with a light dismiss user action, a platform-specific user action, or a developer-specified mechanism.
   * - closerequest: The dialog can be dismissed with a platform-specific user action or a developer-specified mechanism.
   * - none: The dialog can only be dismissed with a developer-specified mechanism.
   */
  closedby?: "any" | "closerequest" | "none";
  /** Content rendered in the footer area below the body, typically action buttons. */
  footer?: ReactNode;
  /** Title displayed in the dialog header. Rendered as an `<h1>` visually sized at `s`. */
  heading: ReactNode;
  /** Called when the dialog requests to close (escape key, backdrop click, or close button). Update the `open` prop in response. */
  onClose: () => void;
  /** Controls whether the dialog is shown. Pass `true` to open, `false` to close. */
  open: boolean;
  /** Optional subtitle rendered below the heading in smaller body text. */
  subheading?: string;
  /**
   * - true (default): Modal dialog.
   * - false: Non-modal dialog.
   */
  modal?: boolean;
  /**
   * - left: Left side drawer.
   * - right: Right side drawer.
   */
  drawer?: "left" | "right";
}

export type DialogProps = DialogBaseProps &
  (
    | {
        closedby: "none";
        closeButtonLabel?: never;
        closeButtonAriaLabel?: never;
      }
    | {
        closedby?: "any" | "closerequest";
        closeButtonLabel: NonNullable<string>;
        closeButtonAriaLabel?: never;
      }
    | {
        closedby?: "any" | "closerequest";
        closeButtonLabel?: never;
        closeButtonAriaLabel: NonNullable<string>;
      }
  );

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  (
    {
      children,
      className,
      "aria-label": contentLabel,
      closeButtonLabel,
      closeButtonAriaLabel,
      closedby = "any",
      footer,
      heading,
      modal = true,
      drawer,
      onClose,
      open,
      subheading,
      ...rest
    },
    ref,
  ) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useImperativeHandle(
      ref,
      () => dialogRef.current ?? ({} as HTMLDialogElement),
      [],
    );

    const handleBackdropClick = () => {
      if (modal && closedby == "any" && open) {
        onClose();
      }
    };

    const handleEscapeKey = () => {
      if (modal && closedby != "none" && open) {
        onClose();
      }
    };

    const checkScroll = () => {
      if (dialogRef.current) {
        setIsScrolling(
          dialogRef.current.clientHeight < dialogRef.current.scrollHeight,
        );
      }
    };

    useEffect(() => {
      if (dialogRef.current) {
        if (open) {
          if (modal) {
            dialogRef.current.showModal();
          } else {
            dialogRef.current.show();
          }
        } else {
          dialogRef.current.close();
        }
      }

      checkScroll();
      document.body.style.overflow = open && modal ? "hidden" : "unset";

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [open, modal]);

    const id = useId();
    const headingId = `${id}-heading`;
    const contentId = `${id}-content`;

    useClickOutside(wrapperRef, handleBackdropClick);
    useKeydown(null, "Escape", handleEscapeKey);
    useWindowResize(checkScroll, { throttleTime: 200 });
    useEffect(checkScroll, [children]);

    return (
      <dialog
        className={clsx(
          "sds-dialog",
          isScrolling && "sds-dialog--scrollable",
          drawer && `sds-dialog--drawer sds-dialog--drawer-${drawer}`,
          className,
        )}
        aria-labelledby={contentLabel ? undefined : headingId}
        aria-describedby={contentLabel ? undefined : contentId}
        aria-label={contentLabel}
        ref={dialogRef}
        {...rest}
      >
        <div ref={wrapperRef}>
          <div className="sds-dialog__header">
            <div
              id={headingId}
              data-testid="headings"
              className="sds-dialog__heading"
            >
              <Heading1 size="s">{heading}</Heading1>
              {subheading !== undefined && <Paragraph>{subheading}</Paragraph>}
            </div>

            {closedby != "none" && (
              <Button
                variant="transparent"
                icon={<CancelIcon />}
                iconVariant={closeButtonAriaLabel ? "only" : undefined}
                className="sds-dialog__close-button"
                onClick={onClose}
                aria-label={closeButtonLabel ? undefined : closeButtonAriaLabel}
              >
                {closeButtonLabel}
              </Button>
            )}
          </div>
          <div className="sds-dialog__content-wrapper" ref={contentRef}>
            <div
              id={contentId}
              data-testid="content"
              className="sds-typography-body--xl sds-dialog__content"
            >
              {children}
            </div>
            {footer !== undefined && (
              <div className="sds-dialog__footer">{footer}</div>
            )}
          </div>
        </div>
      </dialog>
    );
  },
);

Dialog.displayName = "Dialog";
export default Dialog;
