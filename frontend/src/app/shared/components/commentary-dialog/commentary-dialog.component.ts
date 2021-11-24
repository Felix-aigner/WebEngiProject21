import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Message} from "../../models/message.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-commentary-dialog',
  templateUrl: './commentary-dialog.component.html',
  styleUrls: ['./commentary-dialog.component.scss']
})
export class CommentaryDialogComponent implements OnInit {

  commentaryForm = this.fb.group({
    text: this.fb.control('', [Validators.required])
  })

  constructor(public dialogRef: MatDialogRef<CommentaryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public msg: Message,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submitNewComment() {
    this.dialogRef.close(this.commentaryForm.value.text)
  }
}
