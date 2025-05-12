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
import "./dialog.pcss";

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
        dismissable?: true;
        closeButtonLabel: string;
        closeButtonAriaLabel?: never;
      }
    | {
        dismissable?: true;
        closeButtonLabel?: never;
        closeButtonAriaLabel: string;
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
      dismissable = true,
      footer,
      heading,
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
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(open);

    useImperativeHandle(
      ref,
      () => dialogRef.current ?? ({} as HTMLDialogElement),
      [],
    );

    const handleBackdropClick = () => {
      if (dismissable && isOpen) {
        onClose();
      }
    };

    const handleEscapeKey = () => {
      if (dismissable && isOpen) {
        onClose();
      }
    };

    useEffect(() => {
      if (dialogRef.current) {
        if (open) {
          dialogRef.current.showModal();
        } else {
          dialogRef.current.close();
        }
      }

      setIsOpen(open);
      document.body.style.overflow = open ? "hidden" : "unset";

      return () => {
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

    useClickOutside(wrapperRef, handleBackdropClick);
    useKeydown(null, "Escape", handleEscapeKey);
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
        {...rest}
      >
        <div ref={wrapperRef}>
          <header className="sds-dialog__header">
            <div
              id={headingId}
              data-testid="headings"
              className="sds-dialog__heading"
            >
              <Heading1 size="s">{heading}</Heading1>
              {subheading !== undefined && <Paragraph>{subheading}</Paragraph>}
            </div>

            {dismissable && (
              <Button
                variant="transparent"
                icon={<CancelIcon />}
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
              className="sds-typography-body--l sds-dialog__content"
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
