export const hostname = window.location.hostname.split(".").slice(-2).join(".");

export enum Environment {
  Development = "ENVIRONMENT_DEVELOPMENT",
  Staging = "ENVIRONMENT_STAGING",
  Production = "ENVIRONMENT_PRODUCTION",
}

export const getEnvironment = (): Environment => {
  if (process.env.NODE_ENV === "development") {
    return Environment.Development;
  }

  if (hostname === "squareupstaging.com") {
    return Environment.Staging;
  }

  if (hostname === "squareup.com") {
    return Environment.Production;
  }

  throw new Error("Cannot determine environment");
};

export const isDevelopmentEnvironment = () => getEnvironment() === Environment.Development;

export const isStagingEnvironment = () => getEnvironment() === Environment.Staging;

export const isProductionEnvironment = () => getEnvironment() === Environment.Production;
