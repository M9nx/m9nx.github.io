import { createBrowserRouter } from "react-router-dom";
import { InjectedCardHome } from "/src/pages/card-home/InjectedCardHome";
import { InjectedCardSettings } from "/src/pages/card-settings/InjectedCardSettings";
import { InjectedCardStatus } from "/src/pages/card-status/InjectedCardStatus";
import { Root } from "/src/Root";
import { RoutableCardActivationModal } from "/src/components/card-activation/routable/RoutableCardActivationModal";
import { RoutableSetPinModal } from "/src/components/set-pin/routable/RoutableSetPinModal";
import { SetPinType } from "/src/components/set-pin/SetPin";

/**
 * PageRouter is used to handle which page and elements render at certain routes.
 */
const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <InjectedCardHome />,
        children: [
          {
            path: "/activate-card/:cardToken",
            element: <RoutableCardActivationModal />,
          },
        ],
      },
      {
        path: "/card/:cardToken/settings",
        element: <InjectedCardSettings />,
        children: [
          {
            path: "/card/:cardToken/settings/activate-card",
            element: <RoutableCardActivationModal />,
          },
          {
            path: "/card/:cardToken/settings/reset-pin",
            element: <RoutableSetPinModal type={SetPinType.RESET} />,
          },
        ],
      },
      { path: "/card/:cardToken/status", element: <InjectedCardStatus /> },
    ],
  },
]);

export default router;
