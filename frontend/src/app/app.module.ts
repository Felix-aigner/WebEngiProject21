import {NgModule} from '@angular/core';
import {AppComponent} from './core/components/app/app.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppModule {
}
