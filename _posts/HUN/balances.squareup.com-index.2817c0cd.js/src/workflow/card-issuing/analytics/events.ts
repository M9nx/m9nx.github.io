import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Screen, State, Action, ActionType } from "/src/workflow/card-issuing";
import { ActionType as CardCustomizationActionType } from "/src/workflow/card-issuing/card-customization";
import { ActionType as CardShippingActionType } from "/src/workflow/card-issuing/card-shipping";
import { ActionType as VerifyNameActionType } from "/src/workflow/card-issuing/verify-name";
import { EventLogging } from "/src/workflow/card-issuing/analytics/index";

const enterLegalNamePageView = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, after], _]) =>
        !before.modalOpen && after.modalOpen && after.navigation.current === Screen.VerifyName
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.View,
        page: EventLogging.Page.EnterLegalName,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

const enterLegalNameNextButtonClick = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, _], action]) =>
        before.navigation.current === Screen.VerifyName &&
        action.type === VerifyNameActionType.UserClickNext
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.Click,
        page: EventLogging.Page.EnterLegalName,
        target: EventLogging.Target.Next,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

const personalizeCardPageView = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, after], _]) =>
        before.navigation.current !== Screen.Customization &&
        after.navigation.current === Screen.Customization
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.View,
        page: EventLogging.Page.PersonalizeCard,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

const personalizeCardNextButtonClick = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, _], action]) =>
        before.navigation.current === Screen.Customization &&
        action.type === CardCustomizationActionType.UserClickNextAction
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.Click,
        page: EventLogging.Page.PersonalizeCard,
        target: EventLogging.Target.Next,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

const shippingDetailsPageView = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, after], _]) =>
        before.navigation.current !== Screen.ShippingAddress &&
        after.navigation.current === Screen.ShippingAddress
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.View,
        page: EventLogging.Page.ShippingDetails,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

const shippingDetailsNextButtonClick = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, _], action]) =>
        before.navigation.current === Screen.ShippingAddress &&
        action.type === CardShippingActionType.UserClickNextButton
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.Click,
        page: EventLogging.Page.ShippingDetails,
        target: EventLogging.Target.Next,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

const orderConfirmationPageView = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, after], _]) =>
        before.navigation.current !== Screen.OrderConfirmation &&
        after.navigation.current === Screen.OrderConfirmation
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.View,
        page: EventLogging.Page.OrderConfirmation,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

const orderConfirmationDoneButtonClick = (updates: Observable<[[State, State], Action]>) =>
  updates.pipe(
    filter(
      ([[before, _], action]) =>
        before.navigation.current === Screen.OrderConfirmation && action.type === ActionType.Done
    ),
    map(([[_before, after], _]) =>
      EventLogging.CDP.event({
        action: EventLogging.Action.Click,
        page: EventLogging.Page.OrderConfirmation,
        target: EventLogging.Target.Next,
        cardInvitationToken: after.cardInvitationToken,
      })
    )
  );

export default [
  enterLegalNamePageView,
  enterLegalNameNextButtonClick,
  personalizeCardPageView,
  personalizeCardNextButtonClick,
  shippingDetailsPageView,
  shippingDetailsNextButtonClick,
  orderConfirmationPageView,
  orderConfirmationDoneButtonClick,
];
