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


@NgModule({
  declarations: [
    MessageCardComponent,
    CommentaryDialogComponent
  ],
  exports: [
    MessageCardComponent,
    CommentaryDialogComponent
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
    MatDividerModule
  ]
})
export class SharedModule {
}
