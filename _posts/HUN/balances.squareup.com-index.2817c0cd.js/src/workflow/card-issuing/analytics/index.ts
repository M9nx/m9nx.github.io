import type { TrackArgs } from "@squareup/cdp/dist/src/cdp/types";
import analytics from "/src/lib/workflow/utils/analytics";
import events from "./events";
import type { State, Action } from "../index";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace EventLogging {
  export enum Action {
    Click = "Click",
    View = "View",
  }

  export enum Page {
    EnterLegalName = "Enter Legal Name",
    PersonalizeCard = "Personalize Card",
    ShippingDetails = "Shipping Details",
    OrderConfirmation = "Order Confirmation",
  }

  export enum Target {
    Next = "Next",
    Done = "Done",
  }

  export enum Feature {
    CardOrdering = "Card Ordering",
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace CDP {
    const eventName = (action: Action, feature: Feature) => `${action} ${feature}`;

    interface EventArgs {
      readonly action: Action;
      readonly page: Page;
      readonly target?: Target;
      readonly cardInvitationToken?: string;
    }

    // We expect the known types from EventArgs, but any JSON serializable values
    // will be accepted
    export const event = (args: EventArgs): TrackArgs => {
      const feature = Feature.CardOrdering;
      return {
        eventName: eventName(args.action, feature),
        eventProps: {
          ...args,
          applet: "Home",
          feature,
        },
      };
    };
  }
}

export default analytics<State, Action>([...events]);
