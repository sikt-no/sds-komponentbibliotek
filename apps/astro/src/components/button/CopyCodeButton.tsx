import { CodeIcon } from "@phosphor-icons/react/dist/ssr";
import { Button, type ButtonProps } from "@sikt/sds-button";

export const CopyCodeButton = ({
  variant = "neutral",
  size = "small",
  iconVariant = "left",
  text,
  ...rest
}: ButtonProps & { text: string }) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      iconVariant={iconVariant}
      icon={<CodeIcon className="sds-icon" aria-hidden />}
      onClick={() => {
        void copyToClipboard(text);
      }}
      {...rest}
    />
  );
};
