import {createAction, props} from "@ngrx/store";
import {Message} from "../../shared/models/message.model";
import {Category} from "../../shared/models/category.model";
import {VoteModel} from "../../shared/models/vote.model";


export const getMessages = createAction('[Dashboard] get Messages')
export const getMessagesSuccess = createAction('[Dashboard] get Messages Success', props<{ result: Message[] }>())
export const getMessagesFailure = createAction('[Dashboard] get Messages Failure')

export const postMessage = createAction('[Dashboard] post Message', props<{ message: Message }>())
export const postMessageSuccess = createAction('[Dashboard] post Message Success')
export const postMessageFailure = createAction('[Dashboard] post Message Failure')

export const postVote = createAction('[Dashboard] post Vote', props<{ vote: VoteModel, msgId: string }>())
export const postVoteSuccess = createAction('[Dashboard] post Vote Success')
export const postVoteFailure = createAction('[Dashboard] post Vote Failure')

export const patchVote = createAction('[Dashboard] patch Vote', props<{ vote: VoteModel, msgId: string }>())
export const patchVoteSuccess = createAction('[Dashboard] patch Vote Success')
export const patchVoteFailure = createAction('[Dashboard] patch Vote Failure')

export const postComment = createAction('[Dashboard] post Comment', props<{ comment: Comment, msgId: string }>())
export const postCommentSuccess = createAction('[Dashboard] post Comment Success')
export const postCommentFailure = createAction('[Dashboard] post Comment Failure')

export const getCategories = createAction('[Dashboard] get Categories')
export const getCategoriesSuccess = createAction('[Dashboard] get Categories Success', props<{ result: Category[] }>())
export const getCategoriesFailure = createAction('[Dashboard] get Categories Failure')
