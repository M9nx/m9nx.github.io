import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { DIContainer } from "./config/configure-dependencies";
import { UserProvider } from "./hooks/use-user";
import { WindowDimensionsProvider } from "./hooks/use-window-dimensions";
import { DIContainerProvider } from "./hooks/use-dependency-injection-container";
import { UseCdpProvider } from "/src/hooks/use-cdp";
import { ApplicationBootstrap } from "/src/util/bootstrap";
import { getEnvironment } from "/src/util/environment";

export interface AppProps {
  readonly bootstrap: ApplicationBootstrap;
  readonly diContainer: DIContainer;
}

export function App({ bootstrap, diContainer }: AppProps) {
  // TODO(cvu): figure out what the actual title should be
  const { t } = useTranslation("site");
  const title = t("title");

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <DIContainerProvider value={diContainer}>
      {/* FIXME(cvu): replace when we decide on state management or something */}
      <WindowDimensionsProvider>
        <UserProvider initialUser={bootstrap.user}>
          <UseCdpProvider environment={getEnvironment()} personToken={bootstrap.user.personToken}>
            <RouterProvider router={router} />
          </UseCdpProvider>
        </UserProvider>
      </WindowDimensionsProvider>
    </DIContainerProvider>
  );
}
