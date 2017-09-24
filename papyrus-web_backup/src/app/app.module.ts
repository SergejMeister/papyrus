import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { Dashboard }   from './dashboard/dashboard.component';
import { NavigationMenu }   from './navigation-menu/navigation-menu.component';
import { StateService } from './services/state.service';
import 'hammerjs';

@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    Dashboard,
    NavigationMenu
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
