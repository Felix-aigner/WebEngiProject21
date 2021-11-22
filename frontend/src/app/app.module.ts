import {NgModule} from '@angular/core';
import {AppComponent} from './core/components/app/app.component';
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppModule {
}
