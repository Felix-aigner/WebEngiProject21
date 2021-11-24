import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from "../../../shared/models/message.model";
import {Category} from "../../../shared/models/category.model";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-message-feed',
  templateUrl: './message-feed.component.html',
  styleUrls: ['./message-feed.component.scss']
})
export class MessageFeedComponent implements OnInit {
  @Output() voteForMessage: EventEmitter<Message> = new EventEmitter<Message>()
  @Output() addComment: EventEmitter<Message> = new EventEmitter<Message>()
  @Input() categories!: Category[]
  @Input() filterForm!: FormGroup
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

  upVoteMessage(event: number, msg: Message) {
    msg.upvotes += 1;
    this.voteForMessage.emit(msg)
  }

  downVoteMessage(event: number, msg: Message) {
    msg.downvotes += 1;
    this.voteForMessage.emit(msg)
  }

  addNewComment(comment: string, msg: Message) {
    msg.comments.push({text: comment})
    this.addComment.emit(msg)
  }
}
