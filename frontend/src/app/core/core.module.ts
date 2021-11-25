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
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {StoreModule} from '@ngrx/store';
import {reducer} from "./store/core.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CoreEffects} from "./store/core.effects";
import {HttpClientModule} from "@angular/common/http";
import {CoreService} from "./services/core.service";
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
    StoreModule.forRoot({core: reducer}, {}),
    EffectsModule.forRoot([CoreEffects]),
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    SocialLoginModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '708313847097-qqhkk449k8ut39q0uf0290rhvgm4cthh.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
    },
    CoreService,
  ]
})
export class CoreModule {
}
