import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { CDP } from "@squareup/cdp";
import { createCDPInstance, getIdentifySettings } from "/src/config/cdp";
import { Environment } from "/src/util/environment";

const CdpContext = createContext<CDP | undefined>(undefined);

export interface CdpProviderProps {
  readonly environment: Environment;
  readonly personToken: string;
}

export function UseCdpProvider({
  environment,
  personToken,
  children,
}: PropsWithChildren<CdpProviderProps>) {
  const [cdp, setCdp] = useState<CDP>();

  useEffect(() => {
    const cdp = createCDPInstance(environment);
    cdp.identifyV2(getIdentifySettings(personToken));
    setCdp(cdp);
  }, []);

  return cdp ? <CdpContext.Provider value={cdp}>{children}</CdpContext.Provider> : null;
}

export const useCdp = (): CDP => {
  const cdp = useContext(CdpContext);

  if (!cdp) {
    throw new Error("Trying to use CDP hook but CDP instance has been be created");
  }

  return cdp;
};
