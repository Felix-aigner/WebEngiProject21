import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {DashboardState} from "../../store/dashboard.reducer";
import {selectCategories, selectMessages} from "../../store/dashboard.selectors";
import {map} from "rxjs/operators";
import {getCategories, getMessages} from "../../store/dashboard.actions";
import {Message} from "../../../shared/models/message.model";
import {Category} from "../../../shared/models/category.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filterForm = this.fb.group({
    selectedCategories: this.fb.control('')
  })

  messages$ = this.store.select(selectMessages).pipe(
    map((messages) => {
        const selectedCats: Category[] | undefined = this.filterForm.value.selectedCategories
        if (selectedCats == undefined) {
          return messages
        }
        return messages.filter((message) => {
          return selectedCats.some((category) =>
            message.categories.includes(category)
          );
        })
      }
    ))

  categories$ = this.store.select(selectCategories)

  constructor(private fb: FormBuilder, private store: Store<DashboardState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCategories())
    this.store.dispatch(getMessages())
  }

  dispatchNewVote(msg: Message) {
    console.log(`downvotes: ${msg.downvotes}, upvotes: ${msg.upvotes}`)
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
}
