import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {BankingComponent} from './banking/banking.component';
import {FriendsComponent} from './friends/friends.component';
import {ProfileComponent} from '../profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'friends',
        component: FriendsComponent,
      },
      {
        path: 'banking',
        component: BankingComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      }
      ,
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
