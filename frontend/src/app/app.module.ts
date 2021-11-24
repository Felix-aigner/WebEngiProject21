import {NgModule} from '@angular/core';
import {AppComponent} from './core/components/app/app.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppModule {
}
