import { of, Observable } from "rxjs";
import { map, mergeAll, filter } from "rxjs/operators";
import { State, Action, ActionType } from "/src/workflow/card-settings";
import { Navigation } from "/src/types/navigation";

const openCardActivationModal = (
  updates: Observable<[[State, State], Action]>
): Observable<Navigation> =>
  updates.pipe(
    filter(([_, action]) => action.type === ActionType.UserClickActivateCard),
    map(() => ({
      to: "activate-card",
      state: {
        cardActivation: {
          done: false,
        },
      },
    }))
  );

const openResetPinModal = (updates: Observable<[[State, State], Action]>): Observable<Navigation> =>
  updates.pipe(
    filter(([_, action]) => action.type === ActionType.UserClickResetPin),
    map(() => ({
      to: "reset-pin",
    }))
  );

const navigation = (source: Observable<[[State, State], Action]>): Observable<Navigation> =>
  of(
    ...[openCardActivationModal, openResetPinModal].map((transition) => source.pipe(transition))
  ).pipe(mergeAll());

export default navigation;
