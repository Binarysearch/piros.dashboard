import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardModule } from '@piros/dashboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RouterModule.forRoot([
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
