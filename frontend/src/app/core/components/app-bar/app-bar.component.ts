import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  @Input() routes: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
