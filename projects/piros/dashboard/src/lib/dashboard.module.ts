import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
