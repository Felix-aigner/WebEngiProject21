import { createAction, props } from "@ngrx/store";
import { LoginCredential } from "src/app/shared/models/login-credential.model";
import { User } from "src/app/shared/models/user.model";

export const getUser = createAction('[Core] Get User');
export const getUserSuccess = createAction('[Core] Get User Success', props<{ result: User }>());
export const getUserFailure = createAction('[Core] Get User Failure');

export const postLogin = createAction('[Core] Post Login', props<{ loginCredentials: LoginCredential }>);
export const postLoginSuccess = createAction('[Core] Post Login Success', props<{ accessToken: string, refreshToken: string }>());
export const postLoginFailure = createAction('[Core] Post Login Failure');

export const logout = createAction('[Core] Logout');

export const postSignUp = createAction('[Core] Post SignUp', props<{ result: User }>());
export const postSignUpSuccess = createAction('[Core] Post SignUp Success');
export const postSignUpFailure = createAction('[Core] Post SignUp Failure');