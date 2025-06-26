import { PropsWithChildren, ReactElement } from "react";
import classNames from "classnames";
import {
  getBusinessName,
  getCardholder,
  getCardSignatureUri,
  getCvc,
  getExpirationDateString,
  getFullPan,
} from "/src/util/card";
import { CardPreview } from "../card/CardPreview";
import styles from "./PreviewContentCard.css";
import { Card } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";

export interface PreviewContentCardProps {
  readonly card: Card;
  readonly showCardDetails?: boolean;
  readonly previewSecondaryContent?: ReactElement;
}

export function PreviewContentCard({
  card,
  children,
  showCardDetails = false,
  previewSecondaryContent,
}: PropsWithChildren<PreviewContentCardProps>) {
  const previewContainerClassName =
    previewSecondaryContent == null
      ? styles.previewContainer
      : classNames(styles.previewContainer, styles.previewContainerWithSecondary);
  return (
    <div className={styles.container}>
      <div className={previewContainerClassName}>
        <div className={styles.preview}>
          {/*TODO: replace with real business name*/}
          <CardPreview
            cardholder={getCardholder(card)}
            cvc={getCvc(card)}
            expirationDate={getExpirationDateString(card)}
            fullPan={getFullPan(card)}
            businessName={getBusinessName(card)}
            showCardDetails={showCardDetails}
            signatureDataUri={getCardSignatureUri(card)}
          />
          {previewSecondaryContent}
        </div>
      </div>
      {children ? <div className={styles.listContainer}>{children}</div> : null}
    </div>
  );
}
