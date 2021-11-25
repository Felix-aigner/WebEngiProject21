import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../../shared/models/message.model";
import {Category} from "../../../shared/models/category.model";
import {FormGroup} from "@angular/forms";
import {User} from "../../../shared/models/user.model";
import {VoteModel} from "../../../shared/models/vote.model";
import {DashboardState} from "../../store/dashboard.reducer";
import {Store} from "@ngrx/store";
import {patchVote, postVote} from "../../store/dashboard.actions";

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.scss']
})
export class MessageFeedComponent implements OnInit {
  @Output() addComment: EventEmitter<Message> = new EventEmitter<Message>()
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
    msg.comments.push({text: comment})
    this.addComment.emit(msg)
  }

  voteMessage(vote: VoteModel, msg: Message) {
    console.log(msg.id)
    if (msg.id) {
      this.store.dispatch(postVote({vote, msgId: msg.id}))
    }
  }

  patchVote(vote: VoteModel, msg: Message) {
    console.log(msg.id)
    if (msg.id) {
      this.store.dispatch(patchVote({vote, msgId: msg.id}))
    }
  }
}
