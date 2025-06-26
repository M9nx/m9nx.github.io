import { useEffect, useState } from "react";
import { Workflow } from "/src/lib/workflow";
import { distinctUntilChanged, Subscription } from "rxjs";

// TODO(cvu): reaccess if you like this, @cvu
export const initializeWorkflow = <Context, State, Action>(
  context: Context,
  initialState: State,
  createWorkflow: (seed: State, context: Context) => Workflow<State, Action>
): [State, (action: Action) => void, Workflow<State, Action>] => {
  const [_workflow] = useState(createWorkflow(initialState, context));
  const [_state, setState] = useState<State>(initialState);
  const dispatch = (action: Action) => _workflow.emit(action);

  useEffect(() => {
    const subscription = new Subscription();
    subscription.add(
      _workflow.states
        .pipe(
          distinctUntilChanged(
            (previous, current) => JSON.stringify(previous) === JSON.stringify(current)
          )
        )
        .subscribe(setState)
    );
    if (process.env.NODE_ENV === "development") {
      // TODO(cvu): setup update logger
      subscription.add(_workflow.updates.subscribe((next) => console.log(next)));
    }

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return [_state, dispatch, _workflow];
};
