import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routes = [
    {title: 'Dashboard', path: '/dashboard'},
    {title: 'Something', path: '/something'},
    {title: 'Extras', path: '/extras'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
