import { HttpClient, HttpClientModule } from '@angular/common/http';
import { authService } from 'src/app/shared/services/authService';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [authService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
