import { Link, LinkProps } from "react-router-dom";
import { MarketButton } from "@market/react";
import classNames from "classnames";
import { useWindowDimensions } from "../../../hooks/use-window-dimensions";
import { backButton, backButtonIcon, header, headerTitle } from "./PageHeader.css";

export interface Breadcrumb {
  title: string;
  link: LinkProps;
}

export interface PageHeaderProps {
  breadcrumb: Breadcrumb;
  title: string;
}

export function PageHeader({ breadcrumb, title }: PageHeaderProps) {
  const windowDimensions = useWindowDimensions();

  // FIXME(cvu): replace with whatever svg solution we figure out later
  const backArrowSvg = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 8H1M1 8L8 1M1 8L8 15"
        stroke="black"
        strokeOpacity="0.9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={header}>
      <Link {...breadcrumb.link}>
        {windowDimensions.isMobile ? (
          // For some reason adding classnames makes market button styles go weird if icon only button
          <MarketButton rank="secondary" slot="navigation">
            <div className={backButtonIcon} slot="icon">
              {backArrowSvg}
            </div>
          </MarketButton>
        ) : (
          <MarketButton className={backButton} rank="secondary" slot="navigation">
            {/* FIXME(cvu): svg does not have slot attribute so typecheck complained. will deal with this later*/}
            <div className={backButtonIcon} slot="icon">
              {backArrowSvg}
            </div>
            {breadcrumb.title}
          </MarketButton>
        )}
      </Link>
      <h2 className={classNames("heading-20", headerTitle)}>{title}</h2>
    </div>
  );
}
