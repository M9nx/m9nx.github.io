import { CDP, EntityTypes, Environments, IdentifyArgs } from "@squareup/cdp";
import { Environment } from "/src/util/environment";

const API_KEY_STAGING = "832421b1-5d5b-4b01-bfd5-caa9fb405c7d";
const API_KEY_PRODUCTION = "0ad09861-154b-4304-b1e1-84b23026a89e";

const getApiKey = (environment: Environment): string => {
  switch (environment) {
    case Environment.Development:
      return "TEST_API_KEY";
    case Environment.Staging:
      return API_KEY_STAGING;
    case Environment.Production:
      return API_KEY_PRODUCTION;
    default:
      throw new Error("Unsupported environment for CDP");
  }
};

const getEnvironment = (environment: Environment): Environments => {
  switch (environment) {
    case Environment.Development:
      return Environments.localDev;
    case Environment.Staging:
      return Environments.stage;
    case Environment.Production:
      return Environments.production;
    default:
      throw new Error("Unsupported environment for CDP");
  }
};

export const createCDPInstance = (environment: Environment) =>
  new CDP({
    apiKey: getApiKey(environment),
    environment: getEnvironment(environment),
  });

export const getIdentifySettings = (personToken: string): IdentifyArgs => ({
  entityType: EntityTypes.person,
  entityId: personToken,
});
