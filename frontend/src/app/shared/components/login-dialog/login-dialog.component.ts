import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

// import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    // private socialAuthService: SocialAuthService
  ) { }


  ngOnInit(): void {
  }

  loginWithSchmettr() {

  }

  loginWithGoogleAuth() {
    // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x))
  }

}
