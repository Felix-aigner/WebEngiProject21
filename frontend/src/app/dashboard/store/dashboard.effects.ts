import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getMessages, postMessage, postMessageFailure, postMessageSuccess} from "./dashboard.actions";
import {catchError, concatMap, map} from "rxjs/operators";
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

  constructor(private actions$: Actions, private dashboardService: DashboardService) {
  }
}
