import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutNavigationComponent } from './components/layout-navigation/layout-navigation.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import { FriendsComponent } from './friends/friends.component';
import { BankingComponent } from './banking/banking.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutHeaderComponent,
    LayoutNavigationComponent,
    LayoutContentComponent,
    DashboardComponent,
    FriendsComponent,
    BankingComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
