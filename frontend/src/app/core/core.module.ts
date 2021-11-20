import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './components/app/app.component';
import {AppBarComponent} from './components/app-bar/app-bar.component';
import {CoreRoutingModule} from "./core-routing.module";
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavListComponent} from './components/sidenav-list/sidenav-list.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class CoreModule {
}
