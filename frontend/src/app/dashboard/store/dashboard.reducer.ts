import {Message} from "../../shared/models/message.model";
import {createReducer, on} from "@ngrx/store";
import {getCategoriesSuccess, getMessagesSuccess} from "./dashboard.actions";
import {Category} from "../../shared/models/category.model";

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  messages: Message[];
  categories: Category[];
}

export const initialState: DashboardState = {
  messages: [],
  categories: []
}

export const dashboardReducer = createReducer(
  initialState,
  on(getMessagesSuccess, (state, action) => ({
    ...state,
    messages: action.result
  })),
  on(getCategoriesSuccess, (state, action) => ({
    ...state,
    categories: action.result
  }))
);
