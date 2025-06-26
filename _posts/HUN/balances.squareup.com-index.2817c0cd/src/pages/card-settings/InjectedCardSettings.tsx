import { withInjection } from "/src/components/ui/util/with-injection";
import { APP_DEP } from "/src/config/configure-dependencies";
import { CardSettings, CardSettingsProps } from "/src/pages/card-settings/CardSettings";

export const InjectedCardSettings = withInjection<
  CardSettingsProps,
  "bankingWebCardService" | "cardManagementService"
>(CardSettings, {
  bankingWebCardService: APP_DEP.BANKING_WEB_CARD_SERVICE,
  cardManagementService: APP_DEP.CARD_MANAGEMENT_SERVICE,
});
