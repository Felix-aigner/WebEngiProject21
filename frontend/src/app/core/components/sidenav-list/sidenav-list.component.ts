import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountDialogComponent } from 'src/app/shared/components/account-dialog/account-dialog.component';
import { LoginDialogComponent } from 'src/app/shared/components/login-dialog/login-dialog.component';
import { SignupDialogComponent } from 'src/app/shared/components/signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Input() routes: any[] = []

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
    });
  }

  openSignUp() {
    const dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '350px',
    });
  }

  openAccount() {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      width: '350px',
    });
  }

  logout() {
    
  }
}
