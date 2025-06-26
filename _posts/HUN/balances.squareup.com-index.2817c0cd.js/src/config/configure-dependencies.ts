import rpc from "/src/rpc";
import { BankingWebCardService } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import { BankingWebService } from "/src/protos/squareup/bbfrontend/bankingweb/v1/service";
import { PersonProfileService } from "/src/protos/squareup/bbfrontend/bankingweb/v1/person_profile_service";
import { WebService } from "/src/protos/squareup/bbfrontend/v1/web_service";
import { BankingWebComplianceService } from "/src/protos/squareup/bbfrontend/bankingweb/v1/compliance_service";
import { CardManagementService } from "/src/protos/squareup/bbdebit/cardmanagement";
import { CardManagementService as CardManagementServiceTemp } from "/src/protos/squareup/banking/do_not_use/card_management";

/**
 * Simple dependency injection container. It is just a map of dependencies.
 *
 * TODO(cvu): Consider if this is sufficient or if we should us a library such as rsdi.
 *
 * rsdi has lazy loading dependencies that is nice to have if our list of dependencies
 * get larger and more complicated.
 */

export enum APP_DEP {
  BANKING_WEB_CARD_SERVICE = "BANKING_WEB_CARD_SERVICE",
  BANKING_WEB_COMPLIANCE_SERVICE = "BANKING_WEB_COMPLIANCE_SERVICE",
  BANKING_WEB_SERVICE = "BANKING_WEB_SERVICE",
  CARD_MANAGEMENT_SERVICE = "CARD_MANAGEMENT_SERVICE",
  // temp one for card settings until all protos are ready
  CARD_MANAGEMENT_SERVICE_TEMP = "CARD_MANAGEMENT_SERVICE_TEMP",
  PERSON_PROFILE_SERVICE = "PERSON_PROFILE_SERVICE",
  WEB_SERVICE = "WEB_SERVICE",
}

export interface DIContainer {
  readonly [APP_DEP.BANKING_WEB_CARD_SERVICE]: BankingWebCardService;
  readonly [APP_DEP.BANKING_WEB_COMPLIANCE_SERVICE]: BankingWebComplianceService;
  readonly [APP_DEP.BANKING_WEB_SERVICE]: BankingWebService;
  readonly [APP_DEP.CARD_MANAGEMENT_SERVICE]: CardManagementService;
  readonly [APP_DEP.CARD_MANAGEMENT_SERVICE_TEMP]: CardManagementServiceTemp;
  readonly [APP_DEP.PERSON_PROFILE_SERVICE]: PersonProfileService;
  readonly [APP_DEP.WEB_SERVICE]: WebService;
}

const configureServices = async (): Promise<Partial<DIContainer>> => {
  if (process.env.NODE_ENV === "development") {
    const [
      mockBankingWebCardService,
      mockBankingWebComplianceService,
      mockBankingWebService,
      mockCardManagementService,
      mockCardManagementServiceTemp,
      mockPersonProfileService,
      mockWebService,
    ] = await Promise.all([
      import("/mocks/banking-web-card-service-mocks"),
      import("/mocks/banking-web-compliance-service-mocks"),
      import("/mocks/banking-web-service-mocks"),
      import("/mocks/card-management-service-mocks"),
      import("/mocks/card-management-service-temp-mocks"),
      import("/mocks/person-profile-service-mocks"),
      import("/mocks/web-service-mocks"),
    ]);

    return {
      [APP_DEP.BANKING_WEB_CARD_SERVICE]: mockBankingWebCardService.default,
      [APP_DEP.BANKING_WEB_COMPLIANCE_SERVICE]: mockBankingWebComplianceService.default,
      [APP_DEP.BANKING_WEB_SERVICE]: mockBankingWebService.default,
      [APP_DEP.CARD_MANAGEMENT_SERVICE]: mockCardManagementService.default,
      [APP_DEP.CARD_MANAGEMENT_SERVICE_TEMP]: mockCardManagementServiceTemp.default,
      [APP_DEP.PERSON_PROFILE_SERVICE]: mockPersonProfileService.default,
      [APP_DEP.WEB_SERVICE]: mockWebService.default,
    };
  }

  const rpcImpl = rpc(window.fetch);
  const bankingWebCardService = BankingWebCardService.create(
    // eslint-disable-next-line
    rpcImpl as any
  );
  const bankingWebComplianceService = BankingWebComplianceService.create(
    // eslint-disable-next-line
    rpcImpl as any
  );
  const bankingWebService = BankingWebService.create(
    // eslint-disable-next-line
    rpcImpl as any
  );
  const cardManagementService = CardManagementService.create(
    // eslint-disable-next-line
    rpcImpl as any
  );
  const cardManagementServiceTemp = CardManagementServiceTemp.create(
    // eslint-disable-next-line
    rpcImpl as any
  );
  const personProfileService = PersonProfileService.create(
    // eslint-disable-next-line
    rpcImpl as any
  );
  const webService = WebService.create(
    // eslint-disable-next-line
    rpcImpl as any
  );

  return {
    [APP_DEP.BANKING_WEB_CARD_SERVICE]: bankingWebCardService,
    [APP_DEP.BANKING_WEB_COMPLIANCE_SERVICE]: bankingWebComplianceService,
    [APP_DEP.BANKING_WEB_SERVICE]: bankingWebService,
    [APP_DEP.CARD_MANAGEMENT_SERVICE]: cardManagementService,
    [APP_DEP.CARD_MANAGEMENT_SERVICE_TEMP]: cardManagementServiceTemp,
    [APP_DEP.PERSON_PROFILE_SERVICE]: personProfileService,
    [APP_DEP.WEB_SERVICE]: webService,
  };
};

export const configureDependencies = async (): Promise<DIContainer> => {
  const servicesDependencies = await configureServices();

  return {
    ...servicesDependencies,
  } as DIContainer;
};
