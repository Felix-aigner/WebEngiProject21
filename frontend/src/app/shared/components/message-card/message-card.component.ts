import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../models/message.model";
import {MatDialog} from "@angular/material/dialog";
import {CommentaryDialogComponent} from "../commentary-dialog/commentary-dialog.component";
import {User} from "../../models/user.model";
import {VoteModel} from "../../models/vote.model";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {
  @Output() voteMsg: EventEmitter<VoteModel> = new EventEmitter<VoteModel>()
  @Output() patchVote: EventEmitter<VoteModel> = new EventEmitter<VoteModel>()
  @Output() newComment: EventEmitter<string> = new EventEmitter<string>()
  @Output() deleteMessageWithId: EventEmitter<string> = new EventEmitter<string>()
  @Input() msg!: Message
  @Input() currUser: User | undefined | null
  @Input() allowDelete: boolean = false

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
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

  downVoteAllowed(): boolean {
    if (this.msg.votes) {
      const currVotes = this.msg.votes.filter((vote) => (vote.userId == this.currUser?.id))
      if (currVotes.length !== 0) {
        return currVotes[0].voteFlag == "up"
      }
    }
    return true
  }

  upVoteAllowed(): boolean {
    if (this.msg.votes) {
      const currVotes = this.msg.votes.filter((vote) => (vote.userId == this.currUser?.id))
      if (currVotes.length !== 0) {
        return currVotes[0].voteFlag == "down"
      }
    }
    return true
  }

  getDownVotes(): number {
    if (this.msg.votes)
      return this.msg.votes.filter(x => x.voteFlag == "down").length
    return 0
  }

  getUpVotes(): number {
    if (this.msg.votes)
      return this.msg.votes.filter(x => x.voteFlag == "up").length
    return 0
  }

  vote(voteValue: string) {
    if (!this.msg.votes) {
      this.msg.votes = []
    }
    const currVoting = this.msg.votes.filter((vote) => vote.userId == this.currUser?.id)[0]
    if (currVoting) {
      let newVoting: VoteModel = {...currVoting}
      newVoting.voteFlag = voteValue
      this.patchVote.emit(newVoting)
    } else {
      const id = this.currUser?.id
      if (id) {
        this.voteMsg.emit({userId: id, voteFlag: voteValue})
      }
    }
  }

  userAllowed() {
    if (this.currUser?.accessToken) {
      return true
    }
    return false
  }

  deleteMessage(id: string | undefined) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: false
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && id) {
        this.deleteMessageWithId.emit(id)
      }
    })

  }
}
