import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/shared/models/user.model";
import { getUserFailure, getUserSuccess, logout, postLoginFailure, postLoginSuccess, postSignUpFailure, postSignUpSuccess } from "./core.action";

export interface CoreState {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export const initialState: CoreState = {
    accessToken: '',
    refreshToken: '',
    user: {},
}

export const coreRecuder = createReducer(
    initialState,
    on(getUserSuccess, (state, action) => ({
       ...state,
       user: action.result 
    })),
    on(getUserFailure, (state) => ({
        ...state 
    })),
    on(postLoginSuccess, (state, action) => ({
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken 
    })),
    on(postLoginFailure, (state) => ({
        ...state
    })),
    on(postSignUpSuccess, (state) => ({
        ...state
    })),
    on(postSignUpFailure, (state) => ({
        ...state 
    })),

    // Revoke Refreshtoken?
    on(logout, (state, action) => ({
        ...state,
        accessToken: '',
        refreshToken: ''
    }))
)