import { ScreenReaderOnly } from "@sikt/sds-core";
import { CancelIcon } from "@sikt/sds-icons";

interface ClearButtonProps {
  clearText: string;
}

export const ClearButton = ({ clearText }: ClearButtonProps) => (
  <del suppressHydrationWarning className="sds-combobox__button">
    <ScreenReaderOnly>{clearText}</ScreenReaderOnly>
    <span className="sds-combobox__button-icon">
      <CancelIcon />
    </span>
  </del>
);
