import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MatCardModule} from "@angular/material/card";
import {CreateMessageComponent} from './components/create-message/create-message.component';
import {MessageFeedComponent} from './components/message-feed/message-feed.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";


@NgModule({
  declarations: [
    DashboardComponent,
    CreateMessageComponent,
    MessageFeedComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class DashboardModule {
}
