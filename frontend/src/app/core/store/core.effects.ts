import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {CoreService} from "../services/core.service";
import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
  logout,
  logoutFailure,
  logoutSuccess,
  postGoogleLogin,
  postGoogleLoginFailure,
  postGoogleLoginSuccess,
  postLogin,
  postLoginFailure,
  postLoginSuccess,
  postSignUp,
  postSignUpFailure,
  postSignUpSuccess,
  postUsername,
  postUsernameFailure,
  postUsernameSuccess
} from "./core.action";
import {catchError, concatMap, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {getMessages} from "../../dashboard/store/dashboard.actions";

@Injectable()
export class CoreEffects {

  constructor(private action$: Actions, private coreService: CoreService) {
  }

  getUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUsers),
      mergeMap(() =>
        this.coreService.getUsers().pipe(
          map((result) => getUsersSuccess({users: result})),
          catchError(() => of(getUsersFailure()))
        )
      )
    )
  );

  postUsername$ = createEffect(() =>
    this.action$.pipe(
      ofType(postUsername),
      concatMap((action) =>
        this.coreService.postUsername(action.id, action.username).pipe(
          map(() => postUsernameSuccess({username: action.username})),
          catchError(() => of(postUsernameFailure()))
        )
      )
    )
  );

  postUsernameSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(postUsernameSuccess),
      concatMap(() => [
          getMessages()
        ]
      )
    )
  )

  postLogin$ = createEffect(() =>
    this.action$.pipe(
      ofType(postLogin),
      concatMap((action) =>
        this.coreService.postLogin(action.loginCredentials).pipe(
          map((result) => postLoginSuccess({user: result})),
          catchError(() => of(postLoginFailure()))
        )
      )
    )
  )

  postGoogleLogin$ = createEffect(() =>
    this.action$.pipe(
      ofType(postGoogleLogin),
      concatMap((action) =>
        this.coreService.postGoogleLogin(action.loginCredentials).pipe(
          map((result) => postGoogleLoginSuccess({user: result})),
          catchError(() => of(postGoogleLoginFailure()))
        )
      )
    )
  )

  postSignUp$ = createEffect(() =>
    this.action$.pipe(
      ofType(postSignUp),
      concatMap((action) =>
        this.coreService.postSignUp(action.signUpInformation).pipe(
          map(() => postSignUpSuccess()),
          catchError(() => of(postSignUpFailure()))
        )
      )
    )
  )

  logout$ = createEffect(() =>
    this.action$.pipe(
      ofType(logout),
      concatMap((action) =>
        this.coreService.postLogout(action.refreshToken).pipe(
          map(() => logoutSuccess()),
          catchError(() => of(logoutFailure()))
        )
      )
    )
  );

}
