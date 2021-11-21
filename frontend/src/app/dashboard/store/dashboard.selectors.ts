import {createFeatureSelector, createSelector} from "@ngrx/store";
import {dashboardFeatureKey, DashboardState} from "./dashboard.reducer";

export const selectDashboardState = createFeatureSelector<DashboardState>(dashboardFeatureKey)

export const selectMessages = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.messages
)
