import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {DashboardState} from "../../store/dashboard.reducer";
import {selectCategories, selectMessages} from "../../store/dashboard.selectors";
import {map} from "rxjs/operators";
import {deleteMessage, getCategories, getMessages, postMessage} from "../../store/dashboard.actions";
import {Message} from "../../../shared/models/message.model";
import {selectCurrUser} from "../../../core/store/core.selectors";
import {User} from "../../../shared/models/user.model";
import {CreateMessageModel} from "../../../shared/models/create-message.model";
import {Category} from "../../../shared/models/category.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filterForm = this.fb.group({
    selectedCategories: this.fb.control(undefined)
  })

  currUser$ = this.store.select(selectCurrUser)
  categories$ = this.store.select(selectCategories)
  messages$ = this.store.select(selectMessages).pipe(
    map((messages) => {
      const selCats: Category[] = this.filterForm.controls['selectedCategories'].value
      if (selCats && selCats.length >= 1) {
        return messages.filter((message) => message.categories.filter((category) => selCats.filter((cat) => cat.id == category.id).length >= 1).length >= 1)
      }
      return messages
    })
  )

  constructor(private fb: FormBuilder, private store: Store<DashboardState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCategories())
    this.store.dispatch(getMessages())
    this.filterForm.valueChanges.subscribe(data => {
      this.store.dispatch(getMessages())
    })
  }

  dispatchNewVote(msg: Message) {
    console.log(`votes: ${msg.votes}`)
    // send new vote to backend
    //reload msges
  }

  postNewMessage(msg: CreateMessageModel) {
    console.log(msg)
    this.store.dispatch(postMessage({message: msg}))
  }

  dispatchNewComment(msg: Message) {
    console.log(msg)
  }

  userLoggedIn(user: User | undefined | null) {
    return !!user?.accessToken;

  }

  myMessages(messages: Message[], user: User | undefined | null) {
    if (user?.id) {
      const myMsges = messages.filter((message) => message.owner?.id == user.id?.toLowerCase())
      return myMsges
    }
    return []
  }

  likedMessages(messages: Message[], user: User | undefined | null) {
    if (user?.id) {
      return messages.filter((messages) => (messages.votes) && messages.votes.filter((vote) => vote.userId == user.id && vote.voteFlag == "up").length >= 1)
    }
    return []
  }

  deleteMessage(msgId: string) {
    this.store.dispatch(deleteMessage({messageId: msgId}))
  }
}
