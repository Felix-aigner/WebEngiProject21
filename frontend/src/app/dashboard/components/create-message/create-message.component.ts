import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Category} from "../../../shared/models/category.model";
import {Message} from "../../../shared/models/message.model";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {
  @Output() newMessage: EventEmitter<Message> = new EventEmitter<Message>()

  newMessageForm = this.fb.group({
    messageText: ['', [Validators.required]],
    categories: ['', [Validators.required]],
  });

  public categories: Category[] = [
    {name: 'first cat'},
    {name: 'second cat'}
  ]

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submitNewMessage() {
    const newMsg: Message = {
      text: this.newMessageForm.controls['messageText'].value,
      categories: this.newMessageForm.controls['categories'].value,
      upvotes: 0,
      downvotes: 0,
      comments: []
    }
    this.newMessage.emit(newMsg)
  }
}
