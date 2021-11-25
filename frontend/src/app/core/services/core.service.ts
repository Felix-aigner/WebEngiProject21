import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginCredential} from "src/app/shared/models/login-credential.model";
import {SignUpInformation} from "src/app/shared/models/signup-information.model";
import {User} from "src/app/shared/models/user.model";

@Injectable()
export class CoreService {
  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users');
  }

  postUsername(id: string, username: string) {
    return this.http.patch(`api/users/${id}`, username)
  }

  postLogin(loginCredential: LoginCredential): Observable<User> {
    return this.http.post<User>('api/users/authentication', loginCredential);
  }

  postSignUp(signUpInformation: SignUpInformation) {
    return this.http.post('api/users/registration', signUpInformation)
  }

  postLogout(refreshToken: string) {
    return this.http.post('api/users/logout', refreshToken)
  }
}