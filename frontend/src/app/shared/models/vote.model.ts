import {User} from "./user.model";

export interface VoteModel {
  id?: string
  owner: User;
  voteEnum: string
}
