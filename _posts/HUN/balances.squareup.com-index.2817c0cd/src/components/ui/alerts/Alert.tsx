import AlertX from "tsx:/public/assets/svg/market-icons/alert-x.svg";
import { MarketButton } from "@market/react";
import styles from "./Alert.css";
import classNames from "classnames";

export enum AlertColor {
  Grey = "grey",
}

export enum AlertIcon {
  X = "X",
}

export interface AlertProps {
  readonly buttonText?: string;
  readonly color: AlertColor;
  readonly description?: string;
  readonly icon: AlertIcon;
  readonly title?: string;
  readonly onButtonClick?: () => void;
}

export function Alert({ buttonText, color, description, icon, title, onButtonClick }: AlertProps) {
  const getIcon = (icon: AlertIcon, color: AlertColor) => {
    switch (icon) {
      case AlertIcon.X:
        return <AlertX className={classNames(styles.icon, styles[color])} />;
    }
  };

  return (
    <div className={styles.container}>
      {getIcon(icon, color)}
      {title?.length ? <h2 className={styles.title}>{title}</h2> : <></>}
      {description?.length ? <p className={styles.description}>{description}</p> : <></>}
      {buttonText?.length ? (
        <MarketButton rank="primary" className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </MarketButton>
      ) : (
        <></>
      )}
    </div>
  );
}
