import {MessageComment} from "./comment.model";
import {Category} from "./category.model";
import {User} from "./user.model";
import {VoteModel} from "./vote.model";

export interface Message {
  id?: string
  owner?: User
  content: string
  categories: Category[]
  comments?: MessageComment[]
  votes?: VoteModel[]
  createdAt?: string
}
