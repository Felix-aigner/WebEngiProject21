import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-commentary-dialog',
  templateUrl: './commentary-dialog.component.html',
  styleUrls: ['./commentary-dialog.component.scss']
})
export class CommentaryDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CommentaryDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
