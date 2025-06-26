import { of, Observable } from "rxjs";
import { map, mergeAll, filter } from "rxjs/operators";
import { Action, ActionType, Screen, State } from "/src/workflow/card-activation";
import { Navigation } from "/src/types/navigation";

const redirectAfterClose = (
  updates: Observable<[[State, State], Action]>
): Observable<Navigation> =>
  updates.pipe(
    filter(
      ([[_, state], action]) =>
        action.type === ActionType.Done ||
        (action.type === ActionType.ToggleModal && state.modalOpen === false)
    ),
    map(([[_, state], _action]) => {
      const done = state.screen === Screen.Success || state.done;
      // redirects to card settings if card is activated successfully
      // otherwise redirect back to parent route
      const to = done ? `/card/${state.cardToken}/settings` : "../.";
      const locationState = done
        ? {
            cardActivation: {
              // Handle case where user closes modal on success screen
              done: state.screen === Screen.Success || state.done,
            },
          }
        : undefined;
      return {
        to,
        options: {
          replace: true,
          state: locationState,
        },
      };
    })
  );

const navigation = (source: Observable<[[State, State], Action]>): Observable<Navigation> =>
  of(...[redirectAfterClose].map((transition) => source.pipe(transition))).pipe(mergeAll());

export default navigation;
