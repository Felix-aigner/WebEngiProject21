import {MessageComment} from "./comment.model";
import {Category} from "./category.model";
import {VoteModel} from "./vote.model";
import {User} from "./user.model";

export interface Message {
  id?: string
  user?: User
  text: string
  categories: Category[]
  comments: MessageComment[]
  votes: VoteModel[]
  createdAt?: string
}
