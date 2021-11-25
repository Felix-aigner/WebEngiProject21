import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss']
})
export class SignupDialogComponent implements OnInit {

  signupForm = this.fb.group({
    username: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  signUpWithSchmettr() {
    this.dialogRef.close({
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    })
  }
}
