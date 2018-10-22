import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { navigationRoutes } from './navigation/navigation.routes';

const routes: Routes = [
  { path: '', redirectTo: 'navigation', pathMatch: 'full'},
  {
    path: 'navigation',
    component: NavigationComponent,
    children: navigationRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
