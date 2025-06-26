import { captureException } from "@sentry/react";
import { Suspense, useEffect, useState } from "react";
import { MarketActivityIndicator } from "@market/react";
import { DIContainer } from "/src/config/configure-dependencies";
import BASE_URL from "/src/util/get-base-url";
import {
  BootstrapRequest,
  BootstrapResponse,
} from "/src/protos/squareup/bbfrontend/v1/web_service";
import assert from "/src/util/assert";
import { createApplicationBootstrapFromBootstrap } from "/src/util/bootstrap";
import { App } from "./App";

export interface BootstrapProps {
  readonly diContainer: DIContainer;
}

export function Bootstrap({ diContainer }: BootstrapProps) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState<BootstrapResponse.Authenticated>();

  useEffect(() => {
    const webService = diContainer.WEB_SERVICE;
    webService.getBootstrap(BootstrapRequest.create()).then((response) => {
      if (response.unauthenticated) {
        window.location.replace(new URL(`/login?return_to=${window.location.href}`, BASE_URL));
      } else {
        const { authenticated } = response;
        assert(authenticated, "Missing authenticated from bootstrap");

        const { authorized, unauthorized } = authenticated;
        if (authorized) {
          setAuthenticated(response.authenticated);
        } else {
          assert(unauthorized, "Missing authorization values");
          window.location.replace(new URL(`/launchpad`, BASE_URL));
        }
      }
    }, captureException);
  }, []);

  useEffect(() => {
    if (authenticated != null) {
      setLoading(false);
    }
  }, [authenticated]);

  // TODO(cvu): make better loading
  const loadingIndicator = <MarketActivityIndicator></MarketActivityIndicator>;

  return loading ? (
    loadingIndicator
  ) : (
    <Suspense fallback={loadingIndicator}>
      {authenticated ? (
        <App
          bootstrap={createApplicationBootstrapFromBootstrap(authenticated)}
          diContainer={diContainer}
        ></App>
      ) : null}
    </Suspense>
  );
}
