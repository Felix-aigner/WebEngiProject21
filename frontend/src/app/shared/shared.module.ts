import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageCardComponent} from './components/message-card/message-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CommentaryDialogComponent} from './components/commentary-dialog/commentary-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {LoginDialogComponent} from "./components/login-dialog/login-dialog.component";
import {SignupDialogComponent} from "./components/signup-dialog/signup-dialog.component";
import {AccountDialogComponent} from "./components/account-dialog/account-dialog.component";
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    MessageCardComponent,
    CommentaryDialogComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    AccountDialogComponent,
    ConfirmationDialogComponent
  ],
  exports: [
    MessageCardComponent,
    CommentaryDialogComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    AccountDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTabsModule,
  ],
})
export class SharedModule {
}
