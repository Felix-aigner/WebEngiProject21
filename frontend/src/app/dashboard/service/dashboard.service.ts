import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../shared/models/message.model";
import {Category} from "../../shared/models/category.model";
import {VoteModel} from "../../shared/models/vote.model";
import {CreateMessageModel} from "../../shared/models/create-message.model";
import {CreateCommentModel} from "../../shared/models/create-comment.model";


@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }


  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`api/messages`);
  }

  postMessage(msg: CreateMessageModel) {
    return this.http.post(`api/messages`, msg);
  }

  deleteMessage(msgId: string) {
    return this.http.delete(`api/messages/${msgId}`)
  }

  postVote(vote: VoteModel, msgId: string, token: string) {
    return this.http.post(`api/messages/${msgId}/votes`, vote, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
  }

  patchVote(vote: VoteModel, msgId: string, token: string) {
    return this.http.patch(`api/messages/${msgId}/votes`, vote, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
  }

  postComment(comment: CreateCommentModel, msgId: string, token: string) {
    return this.http.post(`api/message/${msgId}/comments`, comment, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('api/categories');
  }

}
