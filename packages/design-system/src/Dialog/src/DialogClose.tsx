import { CloseIcon } from "@sikt/sds-icons";
import { Button } from "../../Button";
import { useDialogContext } from "./DialogContext";

export interface DialogCloseProps {
  "aria-label": string;
}

export const DialogClose = ({ "aria-label": ariaLabel }: DialogCloseProps) => {
  const { id } = useDialogContext();
  return (
    <div data-part="close">
      <Button
        size="large"
        variant="tertiary"
        aria-label={ariaLabel}
        command="close"
        commandfor={id}
      >
        <Button.Icon>
          <CloseIcon />
        </Button.Icon>
      </Button>
    </div>
  );
};

DialogClose.displayName = "Dialog.Close";
