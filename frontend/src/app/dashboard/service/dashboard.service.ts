import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../shared/models/message.model";
import {Category} from "../../shared/models/category.model";
import {VoteModel} from "../../shared/models/vote.model";


@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }


  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('api/messages');
  }

  postMessage(msg: Message) {
    return this.http.post('api/messages', msg);
  }

  postVote(vote: VoteModel, msgId: string) {
    return this.http.post(`api/messages/${msgId}/votes`, vote)
  }

  postComment(comment: Comment, msgId: string) {
    return this.http.post(`api/messages/${msgId}/comments`, comment)
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('api/categories');
  }
}
