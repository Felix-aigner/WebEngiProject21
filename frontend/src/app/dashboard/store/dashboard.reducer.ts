import {Message} from "../../shared/models/message.model";
import {createReducer, on} from "@ngrx/store";
import {getMessagesSuccess} from "./dashboard.actions";

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  messages: Message[];
}

export const initialState: DashboardState = {
  messages: [],
}

export const dashboardReducer = createReducer(
  initialState,
  on(getMessagesSuccess, (state, action) => ({
    ...state,
    messages: action.result
  }))
);
