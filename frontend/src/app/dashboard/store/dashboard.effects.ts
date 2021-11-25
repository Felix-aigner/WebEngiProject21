import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  getCategories,
  getCategoriesFailure,
  getCategoriesSuccess,
  getMessages,
  getMessagesFailure,
  getMessagesSuccess,
  patchVote,
  patchVoteFailure,
  patchVoteSuccess,
  postComment,
  postCommentFailure,
  postCommentSuccess,
  postMessage,
  postMessageFailure,
  postMessageSuccess,
  postVote,
  postVoteFailure,
  postVoteSuccess
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

  postVote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postVote),
      mergeMap((action) =>
        this.dashboardService.postVote(action.vote, action.msgId).pipe(
          map(() => postVoteSuccess()),
          catchError(() => of(postVoteFailure()))
        )
      )
    )
  );

  postVoteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postVoteSuccess),
      concatMap(() => [
          getMessages()
        ]
      )
    )
  )

  patchVote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(patchVote),
      mergeMap((action) =>
        this.dashboardService.patchVote(action.vote, action.msgId).pipe(
          map(() => patchVoteSuccess()),
          catchError(() => of(patchVoteFailure()))
        )
      )
    )
  );

  patchVoteSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(patchVoteSuccess),
      concatMap(() => [
          getMessages()
        ]
      )
    )
  )

  postComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postComment),
      mergeMap((action) =>
        this.dashboardService.postComment(action.comment, action.msgId).pipe(
          map(() => postCommentSuccess()),
          catchError(() => of(postCommentFailure()))
        )
      )
    )
  );

  postCommentSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postCommentSuccess),
      concatMap(() => [
          getMessages()
        ]
      )
    )
  )

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
