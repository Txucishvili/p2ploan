import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  bootstrap: []
})
export class DashboardModule { }
