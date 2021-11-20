import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Category} from "../../../shared/models/category.model";

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

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

}
