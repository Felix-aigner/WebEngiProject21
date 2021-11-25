import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AccountDialogComponent} from 'src/app/shared/components/account-dialog/account-dialog.component';
import {LoginDialogComponent} from 'src/app/shared/components/login-dialog/login-dialog.component';
import {SignupDialogComponent} from 'src/app/shared/components/signup-dialog/signup-dialog.component';
import {CoreState} from "../../store/core.reducer";
import {Store} from "@ngrx/store";
import {logout, postGoogleLogin, postLogin, postSignUp, postUsername} from "../../store/core.action";
import {selectCurrUser} from "../../store/core.selectors";
import {User} from "../../../shared/models/user.model";

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Input() routes: any[] = []

  currUser$ = this.store.select(selectCurrUser)

  constructor(private dialog: MatDialog, private store: Store<CoreState>) {
  }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '400px',
      minHeight: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.idToken) {
        this.store.dispatch(postGoogleLogin({loginCredentials: result}))
      } else {
        this.store.dispatch(postLogin({loginCredentials: result}))
      }
    })
  }

  openSignUp() {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(postSignUp({signUpInformation: result}))
      }
    })
  }

  openAccount(currUser: User) {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != '' && currUser.id)
        this.store.dispatch(postUsername({id: currUser.id, username: result}))
    })
  }

  logout(refreshToken: string | undefined) {
    this.store.dispatch(logout())
    this.onSidenavClose()
  }
}
