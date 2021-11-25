import {User} from "./user.model";

export interface MessageComment {
  id?: string
  owner?: User
  content: string
  createdAt?: string
  message?: string
}
