import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../models/message.model";
import {MatDialog} from "@angular/material/dialog";
import {CommentaryDialogComponent} from "../commentary-dialog/commentary-dialog.component";
import {User} from "../../models/user.model";
import {VoteModel} from "../../models/vote.model";

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent implements OnInit {
  @Output() voteMsg: EventEmitter<VoteModel> = new EventEmitter<VoteModel>()
  @Output() patchVote: EventEmitter<VoteModel> = new EventEmitter<VoteModel>()
  @Output() newComment: EventEmitter<string> = new EventEmitter<string>()
  @Input() msg!: Message
  @Input() currUser: User | undefined | null

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
    const currVotes = this.msg.votes.filter((vote) => (vote.userId == this.currUser?.userId))
    if (currVotes.length !== 0) {
      return currVotes[0].voteFlag == "up"
    }
    return true
  }

  upVoteAllowed(): boolean {
    const currVotes = this.msg.votes.filter((vote) => (vote.userId == this.currUser?.userId))
    if (currVotes.length !== 0) {
      return currVotes[0].voteFlag == "down"
    }
    return true
  }

  getDownVotes(): number {
    return this.msg.votes.filter(x => x.voteFlag == "down").length
  }

  getUpVotes(): number {
    return this.msg.votes.filter(x => x.voteFlag == "up").length
  }

  vote(voteValue: string) {
    const currVoting = this.msg.votes.filter((vote) => vote.userId == this.currUser?.userId)[0]
    if (currVoting) {
      let newVoting: VoteModel = {...currVoting}
      newVoting.voteFlag = voteValue
      this.patchVote.emit(newVoting)
    } else {
      const id = this.currUser?.userId
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
}
