import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Category} from "../../../shared/models/category.model";
import {User} from "../../../shared/models/user.model";
import {CreateMessageModel} from "../../../shared/models/create-message.model";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {
  @Output() newMessage: EventEmitter<CreateMessageModel> = new EventEmitter<CreateMessageModel>()
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
    const newMsg: CreateMessageModel = {
      OwnerId: this.currUser?.id ? this.currUser.id : '',
      Content: this.newMessageForm.controls['messageText'].value,
      CategoriesId: this.newMessageForm.controls['categories'].value.map((category: Category) => category.id.toUpperCase()),
    }
    this.newMessage.emit(newMsg)
  }
}
