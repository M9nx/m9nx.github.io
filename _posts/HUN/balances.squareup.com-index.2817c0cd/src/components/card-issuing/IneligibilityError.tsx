import { Alert, AlertColor, AlertIcon } from "/src/components/ui/alerts/Alert";
import { useTranslation } from "react-i18next";

export interface IneligibilityErrorProps {
  readonly onButtonClick: () => void;
}

export function IneligibilityError({ onButtonClick }: IneligibilityErrorProps) {
  const { t } = useTranslation("card-issuing", {
    keyPrefix: "error.ineligibility",
  });

  return (
    <Alert
      buttonText={t("buttonText")}
      color={AlertColor.Grey}
      description={t("description")}
      icon={AlertIcon.X}
      onButtonClick={onButtonClick}
    />
  );
}
