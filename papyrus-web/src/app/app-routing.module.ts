import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard }        from './dashboard/dashboard.component';
import { DocumentsView }    from './documents-view/documents-view.component';
import { DocumentView }    from './document-view/document-view.component';
import { ContractsView }    from './contracts-view/contracts-view.component';

const routes: Routes = [
{ path: '', redirectTo: '/documents/create', pathMatch: 'full' },
{ path: 'dashboard',  component: Dashboard },
{ path: 'contracts',  component: ContractsView },
{ path: 'documents',  component: DocumentsView },
{ path: 'documents/create',  component: DocumentView },
{ path: 'documents/edit',  component: DocumentView }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
