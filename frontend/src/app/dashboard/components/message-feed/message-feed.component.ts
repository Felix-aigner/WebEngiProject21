import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../shared/models/message.model";

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.scss']
})
export class MessageFeedComponent implements OnInit {

  @Input() messages: Message[] = [{
    text: "awd",
    comments: [],
    upvotes: 3,
    downvotes: 2,
    categories: []
  }]

  constructor() {
  }

  ngOnInit(): void {
  }

}
