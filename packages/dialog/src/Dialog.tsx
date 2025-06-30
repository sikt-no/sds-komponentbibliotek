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
  /* TODO: Replace with attribute on <dialog> when full native support https://caniuse.com/?search=closedby */
  closedby?: "any" | "closerequest" | "none";
  footer?: ReactNode;
  heading: string;
  onClose: () => void;
  open: boolean;
  subheading?: string;
  modal?: boolean;
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
        closeButtonLabel: string;
        closeButtonAriaLabel?: never;
      }
    | {
        closedby?: "any" | "closerequest";
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
      closedby = "any",
      footer,
      heading,
      modal = true,
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
      if (modal && closedby == "any" && isOpen) {
        onClose();
      }
    };

    const handleEscapeKey = () => {
      if (modal && closedby != "none" && isOpen) {
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
      setIsOpen(open);
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

            {closedby != "none" && (
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
