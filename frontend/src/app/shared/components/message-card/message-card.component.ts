import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../models/message.model";
import {MatDialog} from "@angular/material/dialog";
import {CommentaryDialogComponent} from "../commentary-dialog/commentary-dialog.component";

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {
  @Output() upVoteMsg: EventEmitter<number> = new EventEmitter<number>()
  @Output() downVoteMsg: EventEmitter<number> = new EventEmitter<number>()
  @Output() newComment: EventEmitter<string> = new EventEmitter<string>()
  @Input() msg!: Message

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  upvote() {
    this.upVoteMsg.emit(2)
  }

  downvote() {
    this.downVoteMsg.emit(1)
  }

  openComments() {
    const dialogRef = this.dialog.open(CommentaryDialogComponent, {
      width: '350px',
      data: this.msg
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.newComment.emit(result)
      }
    })

  }

  getCategories() {
    let catString = ''
    this.msg.categories.forEach((category, index) => {
      catString += ` #${category.name}`
    })
    return catString
  }
}
