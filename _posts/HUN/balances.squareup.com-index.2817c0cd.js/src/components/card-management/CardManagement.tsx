import { useTranslation } from "react-i18next";
import { MarketButton, MarketDivider } from "@market/react";
import { Card } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import { Props as ListItemProps } from "/src/components/ui/list/ListItem";
import { PreviewContentCard } from "/src/components/ui/content-card/PreviewContentCard";
import { List } from "/src/components/ui/list/List";
import { ContentCard } from "/src/components/ui/content-card/ContentCard";
import { isActivatable } from "/src/util/card";
import styles from "./CardManagement.css";

export type CardManagementListItem = Omit<ListItemProps, "subtext">;

export interface CardManagementProps {
  readonly card: Card;
  readonly cardSettings: CardManagementListItem[];
  readonly helpSettings: CardManagementListItem[];
  readonly showCardDetails: boolean;
  readonly onActivateCardClick: () => void;
}

export function CardManagement({
  card,
  cardSettings,
  helpSettings,
  showCardDetails,
  onActivateCardClick,
}: CardManagementProps) {
  const { t } = useTranslation("card-settings");
  const previewSecondaryContent = isActivatable(card) ? (
    <MarketButton rank="primary" className={styles.button} onClick={onActivateCardClick}>
      {t("button.activateCard")}
    </MarketButton>
  ) : undefined;

  const showCardSettings =
    cardSettings.length > 0 && cardSettings.some((setting) => !setting.hidden);

  return (
    <div className={styles.container}>
      <PreviewContentCard
        card={card}
        previewSecondaryContent={previewSecondaryContent}
        showCardDetails={showCardDetails}
      >
        {showCardSettings ? <List items={cardSettings} /> : null}
      </PreviewContentCard>
      <MarketDivider className={styles.divider}></MarketDivider>
      {helpSettings.length > 0 ? (
        <ContentCard>
          <h3 className={styles.helpHeader}>{t("section.help.title")}</h3>
          <List items={helpSettings} />
        </ContentCard>
      ) : (
        <></>
      )}
    </div>
  );
}
