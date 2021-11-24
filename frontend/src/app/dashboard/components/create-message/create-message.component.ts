import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Category} from "../../../shared/models/category.model";
import {Message} from "../../../shared/models/message.model";
import {User} from "../../../shared/models/user.model";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {
  @Output() newMessage: EventEmitter<Message> = new EventEmitter<Message>()
  @Input() currUser: User | undefined | null
  @Input() categories!: Category[]

  newMessageForm = this.fb.group({
    messageText: ['', [Validators.required]],
    categories: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submitNewMessage() {
    const newMsg: Message = {
      text: this.newMessageForm.controls['messageText'].value,
      categories: this.newMessageForm.controls['categories'].value,
      votes: [],
      comments: []
    }
    this.newMessage.emit(newMsg)
  }
}
