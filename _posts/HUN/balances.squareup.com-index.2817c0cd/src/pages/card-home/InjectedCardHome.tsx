import { withInjection } from "/src/components/ui/util/with-injection";
import { CardHome } from "/src/pages/card-home/CardHome";
import { APP_DEP } from "/src/config/configure-dependencies";

export const InjectedCardHome = withInjection(CardHome, {
  bankingWebCardService: APP_DEP.BANKING_WEB_CARD_SERVICE,
  bankingWebComplianceService: APP_DEP.BANKING_WEB_COMPLIANCE_SERVICE,
  bankingWebService: APP_DEP.BANKING_WEB_SERVICE,
  personProfileService: APP_DEP.PERSON_PROFILE_SERVICE,
  webService: APP_DEP.WEB_SERVICE,
});
