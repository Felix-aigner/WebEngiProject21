import {createAction, props} from "@ngrx/store";
import {LoginCredential} from "src/app/shared/models/login-credential.model";
import {User} from "src/app/shared/models/user.model";
import {SignUpInformation} from "../../shared/models/signup-information.model";
import {GoogleCredentials} from "../../shared/models/google-credentials.model";

export const getUsers = createAction('[Core] Get Users');
export const getUsersSuccess = createAction('[Core] Get Users Success', props<{ users: User[] }>());
export const getUsersFailure = createAction('[Core] Get Users Failure');

export const postUsername = createAction('[Core] Post Username', props<{ id: string, username: string }>());
export const postUsernameSuccess = createAction('[Core] Post Username Success', props<{ username: string }>());
export const postUsernameFailure = createAction('[Core] Post Username Failure');

export const postLogin = createAction('[Core] Post Login', props<{ loginCredentials: LoginCredential }>());
export const postLoginSuccess = createAction('[Core] Post Login Success', props<{ user: User }>());
export const postLoginFailure = createAction('[Core] Post Login Failure');

export const postGoogleLogin = createAction('[Core] Post Google Login', props<{ loginCredentials: GoogleCredentials }>());
export const postGoogleLoginSuccess = createAction('[Core] Post Google Login Success', props<{ user: User }>());
export const postGoogleLoginFailure = createAction('[Core] Post Google Login Failure');

export const postSignUp = createAction('[Core] Post SignUp', props<{ signUpInformation: SignUpInformation }>());
export const postSignUpSuccess = createAction('[Core] Post SignUp Success');
export const postSignUpFailure = createAction('[Core] Post SignUp Failure');

export const logout = createAction('[Core] Logout');
