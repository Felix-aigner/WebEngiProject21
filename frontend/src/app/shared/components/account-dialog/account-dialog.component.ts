import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss']
})
export class AccountDialogComponent implements OnInit {

  usernameForm = this.fb.group({
    username: this.fb.control('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  submitNewUsername() {
    this.dialogRef.close(this.usernameForm.value.username)
  }

}
