import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {DashboardState} from "../../store/dashboard.reducer";
import {selectCategories, selectMessages} from "../../store/dashboard.selectors";
import {map} from "rxjs/operators";
import {getCategories, getMessages} from "../../store/dashboard.actions";
import {Message} from "../../../shared/models/message.model";
import {selectCurrUser} from "../../../core/store/core.selectors";
import {User} from "../../../shared/models/user.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currUser$ = this.store.select(selectCurrUser)
  categories$ = this.store.select(selectCategories)
  messages$ = this.store.select(selectMessages).pipe(
    map((messages) => {
      //filter by categories
      return messages
    })
  )

  filterForm = this.fb.group({
    selectedCategories: this.fb.control('')
  })


  constructor(private fb: FormBuilder, private store: Store<DashboardState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCategories())
    this.store.dispatch(getMessages())
  }

  dispatchNewVote(msg: Message) {
    console.log(`votes: ${msg.votes}`)
    // send new vote to backend
    //reload msges
  }

  postNewMessage(msg: Message) {
    console.log(msg)
    // send new message to backen
    //reload msges
  }

  dispatchNewComment(msg: Message) {
    console.log(msg)
  }

  userLoggedIn(user: User | undefined | null) {
    return !!user?.accessToken;

  }

  myMessages(messages: Message[], user: User | undefined | null) {
    if (user?.userId) {
      return messages.filter((message) => message.user?.userId == user.userId)
    }
    return []
  }

  likedMessages(messages: Message[], user: User | undefined | null) {
    if (user?.userId) {
      return messages.filter((messages) => messages.votes.filter((vote) => vote.userId == user.userId && vote.voteFlag == "up").length >= 1)
    }
    return []
  }
}
