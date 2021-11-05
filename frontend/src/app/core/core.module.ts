import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './components/app/app.component';
import {AppBarComponent} from './components/app-bar/app-bar.component';
import {CoreRoutingModule} from "./core-routing.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule
  ]
})
export class CoreModule {
}
