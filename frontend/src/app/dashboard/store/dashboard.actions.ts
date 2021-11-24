import {createAction, props} from "@ngrx/store";
import {Message} from "../../shared/models/message.model";
import {Category} from "../../shared/models/category.model";


export const getMessages = createAction('[Dashboard] get Messages')
export const getMessagesSuccess = createAction('[Dashboard] get Messages Success', props<{ result: Message[] }>())
export const getMessagesFailure = createAction('[Dashboard] get Messages Failure')

export const postMessage = createAction('[Dashboard] post Message', props<{ message: Message }>())
export const postMessageSuccess = createAction('[Dashboard] post Message Success')
export const postMessageFailure = createAction('[Dashboard] post Message Failure')

export const getCategories = createAction('[Dashboard] get Categories')
export const getCategoriesSuccess = createAction('[Dashboard] get Categories Success', props<{ result: Category[] }>())
export const getCategoriesFailure = createAction('[Dashboard] get Categories Failure')
