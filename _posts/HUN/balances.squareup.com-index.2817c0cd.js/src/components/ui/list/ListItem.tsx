import { MarketActivityIndicator, MarketRow, MarketToggle } from "@market/react";
import SVGComponent from "tsx:*.svg";
import styles from "./ListItem.css";

// Market row control slot allows for toggle, radio and checkbox
export enum ListControl {
  TOGGLE = "TOGGLE",
}

export interface Props {
  readonly Icon: typeof SVGComponent;
  readonly text: string;
  readonly subtext?: string;
  readonly control?: ListControl;
  readonly hidden?: boolean;
  readonly loading?: boolean;
  readonly value?: boolean;
  readonly action: () => void;
}

export function ListItem({
  Icon,
  text,
  subtext,
  control,
  hidden = false,
  loading = false,
  value = false,
  action,
}: Props) {
  const ToggleComponent = () => {
    if (control === ListControl.TOGGLE) {
      return loading ? (
        <MarketActivityIndicator
          slot="trailing-accessory"
          size="small"
          className={styles.activityIndicator}
        />
      ) : (
        <MarketToggle slot="control" />
      );
    }
    return null;
  };

  return hidden ? null : (
    <MarketRow key={text} onClick={action} variant={control ? "regular" : "drill"} selected={value}>
      {/*TODO(cvu): figure out import square svg icons and add icon*/}
      <div slot="leading-accessory" className={styles.iconContainer}>
        <Icon className={styles.icon}></Icon>
      </div>
      <label slot="label">{text}</label>
      <ToggleComponent />
      {subtext && <p slot="subtext">{subtext}</p>}
    </MarketRow>
  );
}
