import classNames from "classnames";
import { PropsWithChildren, ReactElement } from "react";
import { MarketActivityIndicator } from "@market/react";
import * as styles from "./Page.css";

export interface PageProps {
  readonly header?: ReactElement;
  readonly loading?: boolean;
  readonly className?: string;
}

export function Page({
  header,
  loading = false,
  className,
  children,
}: PropsWithChildren<PageProps>) {
  const loadingIndicator = <MarketActivityIndicator></MarketActivityIndicator>;

  return loading ? (
    loadingIndicator
  ) : (
    <div className={classNames(styles.page, className)}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
