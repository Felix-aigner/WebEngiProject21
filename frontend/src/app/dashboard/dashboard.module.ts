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
import {dashboardFeatureKey, dashboardReducer} from "./store/dashboard.reducer";
import {StoreModule} from "@ngrx/store";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {EffectsModule} from "@ngrx/effects";
import {DashboardEffects} from "./store/dashboard.effects";
import {DashboardService} from "./service/dashboard.service";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    DashboardComponent,
    CreateMessageComponent,
    MessageFeedComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature(dashboardFeatureKey, dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule {
}
