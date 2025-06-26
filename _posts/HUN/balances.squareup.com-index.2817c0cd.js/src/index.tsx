import "@market/web-components/dist/market/market.css";
import { body } from "./index.css";
import { render } from "react-dom";
import { defineCustomElements } from "@market/web-components/dist/custom-elements";
import { getEnvironment } from "/src/util/environment";
import { configureDependencies } from "./config/configure-dependencies";
import { initializeSentry } from "./config/initialize-sentry";
import "./config/i18n";
import { Bootstrap } from "./Bootstrap";

(async function () {
  defineCustomElements(window);

  document.body.className = body;

  if (process.env.NODE_ENV !== "development") {
    initializeSentry(getEnvironment());
  }

  // TODO(cvu): decide if this simple dependency container is sufficient or should we use package like rsdi
  const diContainer = await configureDependencies();

  const container = document.getElementById("app");
  if (container == null) {
    throw new Error("application failed to mount due to missing HTMLElement with 'app' id");
  }
  render(<Bootstrap diContainer={diContainer} />, container);
})();
