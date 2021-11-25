import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginCredential} from "../../models/login-credential.model";
import {GoogleCredentials} from "../../models/google-credentials.model";


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  userForm = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private socialAuthService: SocialAuthService,
    private fb: FormBuilder
  ) {
  }


  ngOnInit(): void {
  }

  loginWithSchmettr() {
    const login: LoginCredential = {
      username: this.userForm.value.username,
      password: this.userForm.value.password
    }
    this.dialogRef.close(login)
  }

  loginWithGoogleAuth() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log("something happened")).catch(error => {
      console.log(error);
    })

    this.socialAuthService.authState.subscribe((user: SocialUser) => {
      const login: GoogleCredentials = {
        idToken: user.idToken,
        username: user.name
      }
      this.dialogRef.close(login)
    })
  }

}
