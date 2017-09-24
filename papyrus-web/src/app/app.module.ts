import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import { Dashboard }   from './dashboard/dashboard.component';
import { DocumentsView }    from './documents-view/documents-view.component';
import { DocumentView }    from './document-view/document-view.component';
import { ContractsView }    from './contracts-view/contracts-view.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    Dashboard,
    DocumentsView,
    DocumentView,
    ContractsView
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
