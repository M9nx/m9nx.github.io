import { Observable, of, OperatorFunction } from "rxjs";
import { mergeAll } from "rxjs/operators";
import type { TrackArgs } from "@squareup/cdp/dist/src/cdp/types";

const foldOperators =
  <T, U>(pipes: OperatorFunction<T, U>[]) =>
  (source: Observable<T>): Observable<Observable<U>> =>
    of(...pipes.map((pipe) => source.pipe(pipe)));

// Combine multiple analytics signals into one.
const analytics =
  <State, Action>(pipes: OperatorFunction<[[State, State], Action], TrackArgs>[]) =>
  (source: Observable<[[State, State], Action]>): Observable<TrackArgs> =>
    source.pipe(foldOperators<[[State, State], Action], TrackArgs>(pipes), mergeAll());

export default analytics;
