import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../shared/models/message.model";

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.scss']
})
export class MessageFeedComponent implements OnInit {

  @Input() messages: Message[] = [
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
      comments: [],
      upvotes: 3,
      downvotes: 2,
      categories: [
        {name: 'politics'},
        {name: 'climate'},
        {name: 'personal affairs'}
      ]
    }, {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
      comments: [],
      upvotes: 3,
      downvotes: 2,
      categories: [
        {name: 'politics'},
        {name: 'climate'},
        {name: 'personal affairs'}
      ]
    }, {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren",
      comments: [],
      upvotes: 3,
      downvotes: 2,
      categories: [
        {name: 'politics'},
        {name: 'climate'},
        {name: 'personal affairs'}
      ]
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  openFilterPanel() {

  }
}
