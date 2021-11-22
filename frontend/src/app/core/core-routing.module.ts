import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}