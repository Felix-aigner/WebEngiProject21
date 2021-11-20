import {MessageComment} from "./comment.model";
import {Category} from "./category.model";

export interface Message {
  text: string,
  comments: MessageComment[]
  upvotes: number,
  downvotes: number
  categories: Category[]
}
