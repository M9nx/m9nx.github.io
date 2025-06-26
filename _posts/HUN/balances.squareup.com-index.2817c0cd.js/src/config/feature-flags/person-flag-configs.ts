import { createBooleanFlag } from "@square/feature-relay-web-sdk";

export const personFlags = {
  canToggleLockCard: createBooleanFlag({
    key: "banking-microsite-toggle-card-lock",
    defaultValue: true,
  }),
  canUpdatePin: createBooleanFlag({
    key: "banking-web-enable-update-pin",
    defaultValue: true,
  }),
};
