import { useTranslation } from "react-i18next";
import { Card } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import { Action, State, userClickActivateCardAction } from "/src/workflow/card-settings";
import { CardManagement } from "/src/components/card-management/CardManagement";
import { getCardSettings } from "/src/components/card-management/connected/card-settings-configs";
import { useLaunchDarkly } from "/src/hooks/use-launch-darkly";
import { personFlags } from "/src/config/feature-flags/person-flag-configs";
import { TokenType } from "@square/feature-relay-web-sdk";

export interface ConnectedProps {
  readonly state: State;
  readonly dispatch: (action: Action) => void;
}
export function ConnectedCardManagement({ state, dispatch }: ConnectedProps) {
  const { t } = useTranslation("card-settings");
  const launchDarklyClient = useLaunchDarkly(personFlags, {
    token: "anonymousUser",
    type: TokenType.ANONYMOUS_VISITOR,
  });

  return launchDarklyClient.flagsLoaded && launchDarklyClient.getFlagValue ? (
    <CardManagement
      card={state.card || Card.create()}
      cardSettings={getCardSettings(t, launchDarklyClient.getFlagValue)(state, dispatch)}
      helpSettings={[]}
      showCardDetails={state.showCardDetails}
      onActivateCardClick={() => dispatch(userClickActivateCardAction())}
    />
  ) : null;
}
