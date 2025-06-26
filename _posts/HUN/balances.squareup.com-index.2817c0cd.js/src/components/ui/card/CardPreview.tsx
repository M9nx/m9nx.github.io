import classNames from "classnames";
import { CardPreviewFront, CardPreviewFrontProps } from "/src/components/ui/card/CardPreviewFront";
import { CardPreviewBack, CardPreviewBackProps } from "/src/components/ui/card/CardPreviewBack";
import * as styles from "./CardPreview.css";

export interface CardPreviewProps extends CardPreviewFrontProps, CardPreviewBackProps {
  readonly showCardDetails?: boolean;
}

export function CardPreview({
  businessName,
  cardholder,
  cvc,
  expirationDate,
  fullPan,
  showCardDetails = false,
  signatureDataUri,
}: CardPreviewProps) {
  const previewContainerClassName = showCardDetails
    ? classNames(styles.previewContainer, styles.previewContainerRotate)
    : styles.previewContainer;
  return (
    <div className={previewContainerClassName}>
      <CardPreviewFront
        className={classNames(styles.preview, styles.previewFront)}
        businessName={businessName}
        signatureDataUri={signatureDataUri}
      />
      <CardPreviewBack
        className={classNames(styles.preview, styles.previewBack)}
        cardholder={cardholder}
        cvc={cvc}
        expirationDate={expirationDate}
        fullPan={fullPan}
      />
    </div>
  );
}
