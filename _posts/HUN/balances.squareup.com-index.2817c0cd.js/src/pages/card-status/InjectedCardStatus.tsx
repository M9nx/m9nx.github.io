import { withInjection } from "/src/components/ui/util/with-injection";
import { APP_DEP } from "/src/config/configure-dependencies";
import { CardStatus } from "/src/pages/card-status/CardStatus";

export const InjectedCardStatus = withInjection(CardStatus, {
  bankingWebCardService: APP_DEP.BANKING_WEB_CARD_SERVICE,
});
