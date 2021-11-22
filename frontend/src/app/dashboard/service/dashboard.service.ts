import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../../shared/models/message.model";
import {Category} from "../../shared/models/category.model";


@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {
  }


  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('');
  }

  postMessage(msg: Message) {
    return this.http.post('', msg);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('');
  }
}
