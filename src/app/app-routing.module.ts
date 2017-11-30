import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent, FeedbackComponent, MenuDetailsComponent } from './menu/menu.component';
import { RosterComponent } from './roster/roster.component';
import { UserDataComponent } from './user-data/user-data.component';
import { OverallDataComponent } from './overall-data/overall-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'user-data', component: UserDataComponent },
  { path: 'overall-data', component: OverallDataComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'menu-details', component: MenuDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
