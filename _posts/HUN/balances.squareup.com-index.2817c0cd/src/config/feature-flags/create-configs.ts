import { FlagConfigs, Project, Token } from "@square/feature-relay-web-sdk";
import BASE_URL from "/src/util/get-base-url";

export const createConfigs = (flagConfigs: FlagConfigs, userToken: Token) => ({
  project: Project.PIE,
  flagConfigs,
  origin: BASE_URL.origin,
  withCredentials: true,
  offlineMode: process.env.NODE_ENV === "development",
  userToken,
});

export default createConfigs;
