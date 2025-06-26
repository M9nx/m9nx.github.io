import { TFunction } from "react-i18next";
import { FeatureRelayFlagValue } from "@square/feature-relay-web-sdk";
import { AnyMockableFeatureFlagConfig } from "@square/feature-relay-web-sdk/src/client/client";
import { personFlags } from "/src/config/feature-flags/person-flag-configs";
import { CardManagementListItem } from "/src/components/card-management/CardManagement";
import { ListControl } from "/src/components/ui/list/ListItem";
import ActionEye from "tsx:/public/assets/svg/market-icons/action-eye.svg";
import ActionLockOff from "tsx:/public/assets/svg/market-icons/action-lock-off.svg";
import ActionLockOn from "tsx:/public/assets/svg/market-icons/action-lock-on.svg";
import ActionMessage from "tsx:/public/assets/svg/market-icons/action-message.svg";
import ArrowDualRotatingArrows from "tsx:/public/assets/svg/market-icons/arrow-dual-rotating-arrows.svg";
import AlertQuestionMarkCircle from "tsx:/public/assets/svg/market-icons/alert-question-mark-circle.svg";
import FinanceCardSwipe from "tsx:/public/assets/svg/market-icons/finance-card-swipe.svg";
import {
  Action,
  State,
  userClickResetPinAction,
  userToggleCardDetailsAction,
  userToggleLockCardAction,
} from "/src/workflow/card-settings";
import { CardStatus } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";

/**
 * This file is used to define the card management items and their actions.
 *
 * This file may change when the actions are implemented
 */

/**
 * These are the status in which the card is activated and the majority of settings
 * are accessible to the user.
 */
const ACTIVE_CARD_STATES = [CardStatus.ACTIVE, CardStatus.DISABLED];

export const isCardInActiveState = (status?: CardStatus): boolean => {
  if (status == null) {
    return false;
  }

  return ACTIVE_CARD_STATES.includes(status);
};

export const getShowCardDetailsSetting =
  (t: TFunction) =>
  (state: State, dispatch: (action: Action) => void): CardManagementListItem => ({
    Icon: ActionEye,
    text: t("section.settings.actions.showCardDetails"),
    control: ListControl.TOGGLE,
    hidden: state.card?.status !== CardStatus.ACTIVE,
    value: state.showCardDetails,
    action: () => dispatch(userToggleCardDetailsAction(!state.showCardDetails)),
  });

export const getToggleLockCardSetting =
  (
    t: TFunction,
    getFlagValue: (flag: AnyMockableFeatureFlagConfig) => FeatureRelayFlagValue | undefined
  ) =>
  (state: State, dispatch: (action: Action) => void): CardManagementListItem => {
    const status = state.card?.status;
    return {
      Icon: status === CardStatus.DISABLED ? ActionLockOff : ActionLockOn,
      text:
        status === CardStatus.DISABLED
          ? t("section.settings.actions.toggleLockCard.unlock")
          : t("section.settings.actions.toggleLockCard.lock"),
      control: ListControl.TOGGLE,
      hidden: getFlagValue(personFlags.canToggleLockCard) === false || !isCardInActiveState(status),
      loading: state.toggleLoading.lockCard,
      value: status === CardStatus.DISABLED,
      action: () => dispatch(userToggleLockCardAction(!(status === CardStatus.DISABLED))),
    };
  };

export const getUpdatePinSettings =
  (
    t: TFunction,
    getFlagValue: (flag: AnyMockableFeatureFlagConfig) => FeatureRelayFlagValue | undefined
  ) =>
  (state: State, dispatch: (action: Action) => void): CardManagementListItem => ({
    Icon: ArrowDualRotatingArrows,
    text: t("section.settings.actions.resetPin"),
    hidden:
      getFlagValue(personFlags.canUpdatePin) === false || !isCardInActiveState(state.card?.status),
    action: () => dispatch(userClickResetPinAction()),
  });

export const getCardSettings =
  (
    t: TFunction,
    getFlagValue: (flag: AnyMockableFeatureFlagConfig) => FeatureRelayFlagValue | undefined
  ) =>
  (state: State, dispatch: (action: Action) => void): CardManagementListItem[] =>
    [
      getShowCardDetailsSetting(t)(state, dispatch),
      getToggleLockCardSetting(t, getFlagValue)(state, dispatch),
      getUpdatePinSettings(t, getFlagValue)(state, dispatch),
    ];

// NOTE(cvu): We are not using this yet because we are missing some designs.
// I just didn't want to remove it because I will never remember the name
// of the icons, honestly...
export const getHelpSettings = (t: TFunction): CardManagementListItem[] => [
  {
    Icon: FinanceCardSwipe,
    text: t("section.help.actions.cardHelp"),
    action: () => {
      // TODO(cvu): implement card management actions
      console.log("card help");
    },
  },
  {
    Icon: AlertQuestionMarkCircle,
    text: t("section.help.actions.supportArticles"),
    action: () => {
      // TODO(cvu): implement card management actions
      console.log("support articles");
    },
  },
  {
    Icon: ActionMessage,
    text: t("section.help.actions.contactUs"),
    action: () => {
      // TODO(cvu): implement card management actions
      console.log("contact us");
    },
  },
];
