import { ComponentProps, FunctionComponent } from "react";
import classNames from "classnames";
import { contentCard } from "./ContentCard.css";

export interface ContentCardProps extends ComponentProps<FunctionComponent> {
  className?: string;
}

// This exists because MarketContentCard border is lighter, and I got tired of overriding the padding and margins
export function ContentCard({ className, children }: ContentCardProps) {
  return <div className={classNames(contentCard, className)}>{children}</div>;
}
