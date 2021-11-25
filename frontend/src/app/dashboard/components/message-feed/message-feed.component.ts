import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../../shared/models/message.model";
import {Category} from "../../../shared/models/category.model";
import {FormGroup} from "@angular/forms";
import {User} from "../../../shared/models/user.model";
import {VoteModel} from "../../../shared/models/vote.model";
import {DashboardState} from "../../store/dashboard.reducer";
import {Store} from "@ngrx/store";
import {patchVote, postComment, postVote} from "../../store/dashboard.actions";

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.scss']
})
export class MessageFeedComponent implements OnInit {
  @Output() addComment: EventEmitter<Message> = new EventEmitter<Message>()
  @Output() deleteMessageWithId: EventEmitter<string> = new EventEmitter<string>()
  @Input() currUser: User | undefined | null
  @Input() categories!: Category[]
  @Input() filterForm!: FormGroup
  @Input() messages: Message[] = []
  @Input() feedTag!: string;

  constructor(private store: Store<DashboardState>) {
  }

  ngOnInit(): void {
  }

  openFilterPanel() {

  }


  addNewComment(comment: string, msg: Message) {
    const currUserId = this.currUser?.id
    if (msg.id && currUserId) {
      this.store.dispatch(postComment({msgId: msg.id, comment: {OwnerId: currUserId, Content: comment}}))

    }
  }

  voteMessage(vote: VoteModel, msg: Message) {
    if (msg.id) {
      this.store.dispatch(postVote({vote, msgId: msg.id}))
    }
  }

  patchVote(vote: VoteModel, msg: Message) {
    if (msg.id) {
      this.store.dispatch(patchVote({vote, msgId: msg.id}))
    }
  }

  deleteMessage(msgId: string) {
    this.deleteMessageWithId.emit(msgId)
  }
}
