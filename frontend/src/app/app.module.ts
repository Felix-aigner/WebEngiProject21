import {NgModule} from '@angular/core';
import {AppComponent} from './core/components/app/app.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppModule {
}
