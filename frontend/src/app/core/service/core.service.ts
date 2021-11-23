import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginCredential } from "src/app/shared/models/login-credential.model";
import { SignUpInformation } from "src/app/shared/models/signup-information.model";
import { User } from "src/app/shared/models/user.model";

@Injectable()
export class CoreService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User> {
        return this.http.get<User>('');
    }

    postLogin(loginCredential: LoginCredential) {
        return this.http.post('', loginCredential);
    }

    postSignUp(signUpInformation: SignUpInformation) {
        return this.http.post('', signUpInformation)
    }
}