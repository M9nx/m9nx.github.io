import { ReactElement, ReactNode } from "react";
import { MarketButtonGroup, MarketFooter } from "@market/react";
import classNames from "classnames";
import { useWindowDimensions } from "/src/hooks/use-window-dimensions";
import * as styles from "./Screen.css";

export interface ScreenProps {
  readonly buttons?: ReactElement<HTMLMarketButtonElement>[];
  readonly content: ReactNode;
  readonly title: string;
}

export function Screen({ buttons = [], content, title }: ScreenProps) {
  const windowDimensions = useWindowDimensions();

  const mobileViewport = (
    <>
      <h2 className={classNames("header-30", styles.header)}>{title}</h2>
      <main data-testid="main">{content}</main>
      {buttons?.length > 0 ? (
        <MarketFooter data-testid="footer">
          <MarketButtonGroup alignment="stack" data-testid="button-group">
            {...buttons}
          </MarketButtonGroup>
        </MarketFooter>
      ) : null}
    </>
  );

  const desktopViewport = (
    <>
      <main data-testid="main">
        <h2 className={classNames("header-30", styles.header)}>{title}</h2>
        {content}
        {buttons?.length > 0 ? (
          <MarketButtonGroup alignment="left" className={styles.button} data-testid="button-group">
            {...buttons}
          </MarketButtonGroup>
        ) : null}
      </main>
    </>
  );

  return windowDimensions.isMobile ? mobileViewport : desktopViewport;
}
