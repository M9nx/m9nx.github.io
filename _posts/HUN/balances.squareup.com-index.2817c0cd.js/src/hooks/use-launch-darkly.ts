import { useEffect, useState } from "react";
import {
  createFeatureRelayClient,
  FeatureRelayClient,
  FlagConfigs,
  Token,
} from "@square/feature-relay-web-sdk";
import { AnyMockableFeatureFlagConfig } from "@square/feature-relay-web-sdk/src/client/client";
import createConfigs from "/src/config/feature-flags/create-configs";

export function useLaunchDarkly(flagConfigs: FlagConfigs, userToken: Token) {
  const [client, setClient] = useState<FeatureRelayClient<FlagConfigs>>();
  const [flagsLoaded, setFlagsLoaded] = useState(false);

  useEffect(() => {
    const client = createFeatureRelayClient(createConfigs(flagConfigs, userToken));

    setClient(client);
  }, []);

  useEffect(() => {
    // NOTE(cvu): Load flags can throw an error. I am going to let it throw for now.
    client?.loadFlags().then(() => {
      setFlagsLoaded(true);
    });
  }, [client]);

  const getFlagValue = (flag: AnyMockableFeatureFlagConfig) => {
    if (!flagsLoaded) {
      throw new Error("Flags have not been loaded, please call 'loadFlags' before fetching flag");
    }

    return client?.getFlagValue(flag);
  };

  return {
    flagsLoaded,
    getFlagValue,
  };
}
