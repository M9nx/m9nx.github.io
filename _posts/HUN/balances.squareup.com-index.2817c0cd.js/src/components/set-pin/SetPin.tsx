import { MarketButton, MarketHeader } from "@market/react";
import { useTranslation } from "react-i18next";
import { InputTextField } from "/src/components/ui/form/InputTextField";
import * as styles from "./SetPin.css";
import ErrorIcon from "tsx:/public/assets/svg/market-icons/alert-exclaimation-circle.svg";

export enum SetPinType {
  CREATE = "CREATE_PIN",
  RESET = "RESET_PIN",
}

export enum SetPinError {
  WeakPin = "ERROR_WEAK_PIN",
  InvalidPinMatch = "ERROR_INVALID_PIN_MATCH",
  GenericError = "ERROR_GENERIC",
}

export enum ValueError {
  InvalidLength = "VALUE_ERROR_INVALID_LENGTH",
}

export interface SetPinProps {
  readonly confirmPin: string;
  readonly confirmPinError?: ValueError;
  readonly loading?: boolean;
  readonly pin: string;
  readonly pinError?: ValueError;
  readonly setPinError?: SetPinError;
  readonly showNav?: boolean;
  readonly type: SetPinType;
  readonly onConfirmPinChange: (pin: string) => void;
  readonly onPinChange: (pin: string) => void;
  readonly onNavClick?: () => void;
  readonly onSubmit: (args: unknown) => void;
}

export function SetPin({
  confirmPin,
  confirmPinError,
  loading = false,
  pin,
  pinError,
  setPinError,
  showNav = false,
  type,
  onConfirmPinChange,
  onPinChange,
  onNavClick,
  onSubmit,
}: SetPinProps) {
  const { t } = useTranslation("pin");
  const getHeader = (type: SetPinType) => {
    switch (type) {
      case SetPinType.CREATE:
        return t("title.create");
      case SetPinType.RESET:
        return t("title.reset");
    }
  };

  const getButton = (type: SetPinType) => {
    switch (type) {
      case SetPinType.CREATE:
        return t("submit.continue");
      case SetPinType.RESET:
        return t("submit.save");
    }
  };

  const getConfirmPinError = (error?: ValueError) => {
    switch (error) {
      case ValueError.InvalidLength:
        return t("error.validInput");
      case undefined:
        return undefined;
      default:
        throw new Error("Unsupported error type");
    }
  };

  const getPinError = (error?: ValueError) => {
    switch (error) {
      case ValueError.InvalidLength:
        return t("error.validInput");
      case undefined:
        return undefined;
      default:
        throw new Error("Unsupported error type");
    }
  };

  const getSetPinError = (error?: SetPinError) => {
    switch (error) {
      case SetPinError.GenericError:
        return t("error.generic");
      case SetPinError.InvalidPinMatch:
        return t("error.notMatch");
      case SetPinError.WeakPin:
        return t("error.weak");
      case undefined:
        return undefined;
      default:
        throw new Error("Unsupported error type");
    }
  };

  return (
    <>
      <MarketHeader showNavigation={showNav} onMarketHeaderNavigate={onNavClick}>
        <h2>{getHeader(type)}</h2>
      </MarketHeader>
      <main className={styles.main}>
        <p className="paragraph-30">{t("description")}</p>
        <form data-testid="form-pin" className={styles.form}>
          <InputTextField
            error={getPinError(pinError)}
            label={t("inputLabel.pin")}
            name={t("inputLabel.pin")}
            type="number"
            value={pin}
            onTextChange={onPinChange}
          />
          <InputTextField
            error={getConfirmPinError(confirmPinError)}
            label={t("inputLabel.confirmPin")}
            name={t("inputLabel.confirmPin")}
            type="number"
            value={confirmPin}
            onTextChange={onConfirmPinChange}
          />
        </form>
        {setPinError ? (
          <div className={styles.error} data-testid="error-message">
            <ErrorIcon />
            {getSetPinError(setPinError)}
          </div>
        ) : null}
        <MarketButton
          className={styles.button}
          rank="primary"
          isLoading={loading}
          onClick={onSubmit}
        >
          {getButton(type)}
        </MarketButton>
      </main>
    </>
  );
}
