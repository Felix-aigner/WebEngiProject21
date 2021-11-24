import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  getCategories,
  getCategoriesFailure,
  getCategoriesSuccess,
  getMessages,
  getMessagesFailure,
  getMessagesSuccess,
  postMessage,
  postMessageFailure,
  postMessageSuccess
} from "./dashboard.actions";
import {catchError, concatMap, map, mergeMap} from "rxjs/operators";
import {DashboardService} from "../service/dashboard.service";
import {of} from "rxjs";


@Injectable()
export class DashboardEffects {
  postMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postMessage),
      concatMap((action) =>
        this.dashboardService.postMessage(action.message).pipe(
          map(() => postMessageSuccess()),
          catchError(() => of(postMessageFailure()))
        )
      )
    )
  );

  postMessageSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postMessageSuccess),
      concatMap(() => [
          getMessages()
        ]
      )
    )
  );

  getMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMessages),
      mergeMap(() =>
        this.dashboardService.getMessages().pipe(
          map((result) => getMessagesSuccess({result})),
          catchError(() => of(getMessagesFailure()))
        )
      )
    )
  );

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategories),
      mergeMap(() =>
        this.dashboardService.getCategories().pipe(
          map((result) => getCategoriesSuccess({result})),
          catchError(() => of(getCategoriesFailure()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dashboardService: DashboardService) {
  }
}
