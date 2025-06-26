import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { MarketButton } from "@market/react";
import { InputTextField } from "/src/components/ui/form/InputTextField";
import styles from "./VerifyName.css";
import { Screen } from "/src/components/ui/modals/Screen";

export interface VerifyNameProps {
  readonly firstName: string;
  readonly firstNameError: string;
  readonly lastName: string;
  readonly lastNameError: string;
  readonly loading: boolean;
  readonly onFirstNameChange: (value: string) => void;
  readonly onLastNameChange: (value: string) => void;
  readonly onNextClick: () => void;
}

export function VerifyName({
  firstName,
  firstNameError,
  lastName,
  lastNameError,
  loading,
  onFirstNameChange,
  onLastNameChange,
  onNextClick,
}: VerifyNameProps) {
  const { t } = useTranslation("card-issuing", { keyPrefix: "verifyName" });

  const button = [
    <MarketButton key={t("buttonText")} rank="primary" isLoading={loading} onClick={onNextClick}>
      {t("buttonText")}
    </MarketButton>,
  ];

  const content = (
    <>
      <p className={classNames(styles.description, "paragraph-30")}>{t("description")}</p>
      <div className={styles.inputFields}>
        <InputTextField
          name="firsName"
          label={t("firstName.label")}
          className="market-grid-item-full"
          value={firstName}
          error={firstNameError}
          onTextChange={onFirstNameChange}
        />
        <InputTextField
          name="lastName"
          label={t("lastName.label")}
          className="market-grid-item-full"
          value={lastName}
          error={lastNameError}
          onTextChange={onLastNameChange}
        />
      </div>
    </>
  );

  return <Screen buttons={button} content={content} title={t("title")} />;
}
