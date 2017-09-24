import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard }   from './dashboard/dashboard.component';

const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard',  component: Dashboard }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
