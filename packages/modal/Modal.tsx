import React, { ReactNode, useEffect, useId, useRef, useState } from "react";
import ReactModal from "react-modal";
import clsx from "clsx";
import "./modal.pcss";
import { TertiaryButton } from "@sikt/sds-button";
import { XIcon } from "@sikt/sds-icons";

import { Heading1, Paragraph } from "@sikt/sds-core";
import useWindowResize from "./useWindowResize";

export interface ModalProps {
  /**
   *  Specifies the element that represents the main application content and should be
   *  hidden from screen readers and other assistive technologies while the modal is open.
   *
   *  This element can be set using the appElement prop or by calling
   *  Modal.setAppElement.
   *
   *  @example
   *  appElement: "#__next", // // Hides the main content of your Next.js application from assistive technologies
   *  appElement: document.getElementById("app") // Hides the specified HTML element with id "app"
   *
   */
  appElement?: string | HTMLElement;
  ariaHideApp?: boolean;
  children: ReactNode;
  className?: string;
  /**
   * Specifies the ARIA label for the modal when the heading alone does not sufficiently describe the content.
   * This property should only be used when the heading alone is not enough to provide an adequate description of the content.
   */
  "aria-label"?: string;
  closeButtonLabel?: string;
  /**
   * Specifies whether the modal is dismissable or not. When set to `false`, the user is required to take an action and cannot dismiss the modal using the following methods:
   * - Pressing the "Esc" key
   * - Clicking on the overlay
   * - Clicking on the close button
   */
  dismissable?: boolean;
  footer: ReactNode;
  heading: string;
  onClose: () => void;
  open: boolean;
  subheading?: string;
}

export const Modal = ({
  appElement,
  children,
  className,
  "aria-label": contentLabel,
  ariaHideApp = true,
  closeButtonLabel = "Lukk",
  dismissable = true,
  footer,
  heading,
  onClose,
  open,
  subheading,
}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  useEffect(() => {
    appElement && Modal.setAppElement(appElement);
  }, [appElement]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const checkScroll = () => {
    if (contentRef.current) {
      setIsScrolling(
        contentRef.current.clientHeight < contentRef.current.scrollHeight
      );
    }
  };

  useWindowResize(checkScroll, { throttleTime: 200 });
  useEffect(checkScroll, [children]);

  const id = useId();
  const headingId = `${id}-heading`;
  const contentId = `${id}-content`;

  const ariaValues =
    contentLabel !== undefined
      ? { labelledby: undefined, describedby: undefined }
      : {
          labelledby: headingId,
          describedby: contentId,
        };

  return (
    <ReactModal
      aria={ariaValues}
      contentLabel={contentLabel}
      ariaHideApp={ariaHideApp}
      onRequestClose={onClose}
      onAfterOpen={checkScroll}
      shouldCloseOnOverlayClick={dismissable}
      shouldCloseOnEsc={dismissable}
      isOpen={open}
      className={clsx("sds-modal", {
        "sds-modal--scrollable": isScrolling,
        className,
      })}
      overlayClassName={clsx("sds-modal-overlay")}
    >
      <header
        className={clsx("sds-modal__header", {
          "sds-modal__header--scrollable": false,
        })}
      >
        <div
          id={headingId}
          data-testid="headings"
          className="sds-modal__headings"
        >
          <Heading1 id={headingId} headingType="medium">
            {heading}
          </Heading1>
          {subheading !== undefined && <Paragraph>{subheading}</Paragraph>}
        </div>

        {dismissable && (
          <TertiaryButton
            icon={<XIcon />}
            className="sds-modal__close-button"
            onClick={onClose}
          >
            {closeButtonLabel}
          </TertiaryButton>
        )}
      </header>
      <div className="sds-modal__content" ref={contentRef}>
        <div
          id={contentId}
          data-testid="content"
          className="sds-modal__modal-content"
        >
          {children}
        </div>
        <div className="sds-modal__footer">{footer}</div>
      </div>
    </ReactModal>
  );
};

Modal.setAppElement = (element: string | HTMLElement | null) => {
  if (element !== null) {
    ReactModal.setAppElement(element);
  }
};

export default Modal;
