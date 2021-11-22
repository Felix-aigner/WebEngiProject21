import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../models/message.model";
import {MatDialog} from "@angular/material/dialog";
import {CommentaryDialogComponent} from "../commentary-dialog/commentary-dialog.component";

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {
  @Input() msg!: Message

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  downvote() {

  }

  upvote() {

  }

  openComments() {
    const dialogRef = this.dialog.open(CommentaryDialogComponent, {
      width: '350px',
      data: this.msg
    });
  }
}
