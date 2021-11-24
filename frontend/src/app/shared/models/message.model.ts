import {MessageComment} from "./comment.model";
import {Category} from "./category.model";
import {VoteModel} from "./vote.model";

export interface Message {
  id?: string
  userId?: string
  text: string
  categories: Category[]
  comments: MessageComment[]
  votes: VoteModel[]
  createdAt?: string
}
