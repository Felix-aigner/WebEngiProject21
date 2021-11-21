import {createAction, props} from "@ngrx/store";
import {Message} from "../../shared/models/message.model";


export const getMessages = createAction('[Dashboard] get Messages')
export const getMessagesSuccess = createAction('[Dashboard] get Messages', props<{ result: Message[] }>())
export const getMessagesFailure = createAction('[Dashboard] get Messages')
