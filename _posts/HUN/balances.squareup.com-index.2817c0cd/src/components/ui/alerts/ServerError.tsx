import { Alert, AlertColor, AlertIcon } from "/src/components/ui/alerts/Alert";
import { useTranslation } from "react-i18next";

export interface ServerErrorProps {
  readonly onButtonClick: () => void;
}

export function ServerError({ onButtonClick }: ServerErrorProps) {
  const { t } = useTranslation("site", {
    keyPrefix: "error.flow",
  });

  return (
    <Alert
      buttonText={t("buttonText")}
      color={AlertColor.Grey}
      description={t("description")}
      icon={AlertIcon.X}
      title={t("title")}
      onButtonClick={onButtonClick}
    />
  );
}
