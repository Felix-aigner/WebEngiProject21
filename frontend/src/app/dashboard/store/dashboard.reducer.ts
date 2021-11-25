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
  messages: [
    {
      id: "awdawdawd",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
      comments: [],
      votes: [
        {userId: "yolo", voteFlag: "up"},
        {userId: "something", voteFlag: "up"},
        {userId: "something", voteFlag: "up"},
        {userId: "something", voteFlag: "up"},
        {userId: "something", voteFlag: "up"},
        {userId: "something", voteFlag: "up"},
        {userId: "something", voteFlag: "up"},
        {userId: "something", voteFlag: "up"},
        {userId: "something", voteFlag: "down"},
        {userId: "something", voteFlag: "down"},
        {userId: "something", voteFlag: "down"},
      ],
      categories: [
        {id: "0", name: 'first cat'},
        {id: "0", name: 'second cat'},
        {id: "0", name: 'politics'},
        {id: "0", name: 'climate'},
        {id: "0", name: 'personal affairs'}
      ],
      user: {username: "hansPeter69"},
    }, {
      id: "awdawdawd",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
      comments: [],
      votes: [],
      categories: [
        {id: "0", name: 'first cat'},
        {id: "0", name: 'politics'},
        {id: "0", name: 'climate'},
      ],
      user: {username: "hansPeter69"}
    }, {
      id: "awdawdawd",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
      comments: [],
      votes: [],
      categories: [
        {id: "0", name: 'personal affairs'}
      ]
    },
  ],
  categories: [
    {id: "0", name: 'first cat'},
    {id: "0", name: 'second cat'}
  ]
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
