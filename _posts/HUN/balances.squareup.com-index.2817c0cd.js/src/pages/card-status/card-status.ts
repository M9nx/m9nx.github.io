import { TFunction } from "i18next";
import { GlobalAddress } from "/src/protos/squareup/common/location";
import assert from "/src/util/assert";
import { Card, CardFulfillment } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import { CardPreviewFrontProps } from "/src/components/ui/card/CardPreviewFront";
import { CardPreviewBackProps } from "/src/components/ui/card/CardPreviewBack";
import {
  getBusinessName,
  getCardholder,
  getCardSignatureUri,
  getCvc,
  getExpirationDateString,
  getFullPan,
} from "/src/util/card";

export enum StepIndex {
  Printing,
  Shipping,
  Activatable,
}

export interface TrackerLabels {
  readonly trackerLabelCurrent: string;
  readonly trackerLabelCompleted?: string;
}

export interface CardStep {
  readonly title: string;
  readonly description: string;
  readonly trackerLabels: TrackerLabels;
}

export const getCardStatusSteps =
  (t: TFunction) =>
  (estimatedDeliveryDate: string): CardStep[] =>
    [
      {
        title: t("stepPrinting.title"),
        description: t("stepPrinting.description", {
          replace: {
            estimatedDeliveryDate,
          },
        }),
        trackerLabels: {
          trackerLabelCurrent: t("stepPrinting.stepText"),
          trackerLabelCompleted: t("stepPrinting.completedStepText"),
        },
      },
      {
        title: t("stepOnTheWay.title"),
        description: t("stepOnTheWay.description", {
          replace: {
            estimatedDeliveryDate,
          },
        }),
        trackerLabels: {
          trackerLabelCurrent: t("stepOnTheWay.stepText"),
        },
      },
      {
        title: t("stepActivate.title"),
        description: t("stepActivate.description"),
        trackerLabels: {
          trackerLabelCurrent: t("stepActivate.stepText"),
        },
      },
    ];

export const getTrackerLabels = (steps: CardStep[], currentStepIndex: number): string[] =>
  steps.map((step, index) => {
    if (currentStepIndex === index) {
      return step.trackerLabels.trackerLabelCurrent;
    }
    // Default to current step label if completed label does not exist
    return step.trackerLabels.trackerLabelCompleted || step.trackerLabels.trackerLabelCurrent;
  });

export interface CardStatusState {
  readonly cardPreview: Omit<CardPreviewFrontProps & CardPreviewBackProps, "className">;
  readonly address: GlobalAddress;
  readonly description: string;
  readonly title: string;
  readonly trackerLabels: string[];
  readonly trackerStepIndex: number;
}

export const getTrackerStepIndex = (
  fulfillmentShippingStatus?: CardFulfillment.Shipping.ShippingStatus
): number => {
  // NOTE(cvu): Staging does not have ShippingStatus. This is here temporarily
  // so staging doesn't break.
  // TODO(cvu): Remove this when we have shipping status
  if (!fulfillmentShippingStatus) {
    return StepIndex.Printing;
  }

  const shippingStatus = CardFulfillment.Shipping.ShippingStatus;
  if (fulfillmentShippingStatus === shippingStatus.PROCESSING) {
    return StepIndex.Printing;
  }
  if (fulfillmentShippingStatus === shippingStatus.SHIPPED) {
    return StepIndex.Shipping;
  }
  // TODO(cvu): add condition of after end number of dates have passed or some activatable state check condition
  if (fulfillmentShippingStatus === shippingStatus.DELIVERED) {
    return StepIndex.Activatable;
  }

  throw new Error("Unknown card fulfillment shipping status");
};

export const getCardStatusState =
  (t: TFunction) =>
  (card?: Card): CardStatusState => {
    assert(card, "Card is undefined/null");
    const { expiration, fulfillment, fullPan, securityCode } = card;
    assert(fullPan, "Missing full pan");
    assert(expiration, "Missing expiration");
    assert(securityCode, "Missing security code");
    assert(fulfillment?.shipping, "Missing fulfillment shipping");
    const { address, status } = fulfillment.shipping;
    assert(address, "Missing address");

    const trackerStepIndex = getTrackerStepIndex(status);

    // TODO(cvu): calculate this somewhere
    const estimatedDeliveryDate = "ESTIMATE_DATE";
    const steps = getCardStatusSteps(t)(estimatedDeliveryDate);
    const step = steps[trackerStepIndex];

    return {
      cardPreview: {
        businessName: getBusinessName(card),
        cardholder: getCardholder(card),
        cvc: getCvc(card),
        expirationDate: getExpirationDateString(card),
        fullPan: getFullPan(card),
        signatureDataUri: getCardSignatureUri(card),
      },
      address,
      description: step.description,
      title: step.title,
      trackerLabels: getTrackerLabels(steps, trackerStepIndex),
      trackerStepIndex,
    };
  };
