import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageCardComponent} from './components/message-card/message-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CommentaryDialogComponent} from './components/commentary-dialog/commentary-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


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
    MatDialogModule
  ]
})
export class SharedModule {
}
