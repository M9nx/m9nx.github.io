import { Alert, AlertColor, AlertIcon } from "/src/components/ui/alerts/Alert";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as styles from "./Error.css";

export function Error() {
  const { t } = useTranslation("site", {
    keyPrefix: "error.page",
  });

  const navigate = useNavigate();
  const onButtonClick = () => {
    // refresh page
    navigate(0);
  };

  return (
    <div className={styles.alert}>
      <Alert
        buttonText={t("buttonText")}
        color={AlertColor.Grey}
        description={t("description")}
        icon={AlertIcon.X}
        title={t("title")}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}
