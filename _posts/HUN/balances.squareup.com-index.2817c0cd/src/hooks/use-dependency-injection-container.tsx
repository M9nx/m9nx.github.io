import { createContext, ProviderProps } from "react";
import { DIContainer } from "/src/config/configure-dependencies";

export const DIContainerContext = createContext<DIContainer | null>(null);

export function DIContainerProvider({ value, children }: ProviderProps<DIContainer>) {
  return <DIContainerContext.Provider value={value}>{children}</DIContainerContext.Provider>;
}
