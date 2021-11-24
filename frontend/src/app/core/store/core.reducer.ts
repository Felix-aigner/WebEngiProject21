import {createReducer, on} from "@ngrx/store";
import {User} from "src/app/shared/models/user.model";
import {getUsersSuccess, logoutSuccess, postLoginSuccess, postUsernameSuccess} from "./core.action";

export const coreFeatureKey = 'core'

export interface CoreState {
  currUser: User | undefined;
  users: User[];
}

export const initialState: CoreState = {
  currUser: {
    userId: "yolo",
    accessToken: "something",
    refreshToken: "awdawd",
    username: "yoho"
  },
  users: []
}

export const reducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users
  })),
  on(postLoginSuccess, (state, action) => ({
    ...state,
    currUser: action.user
  })),
  on(postUsernameSuccess, (state, action) => ({
    ...state,
    currUser: {
      ...state.currUser,
      username: action.username
    }
  })),
  on(logoutSuccess, (state, action) => ({
    ...state,
    currUser: undefined
  }))
)
