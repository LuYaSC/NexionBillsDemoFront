import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ServicesComponent } from 'app/pages/services/services.component';
import { StatesComponent } from 'app/pages/states/states.component';
import { CoinsComponent } from 'app/pages/coins/coins.component';
import { BillsComponent } from 'app/pages/bills/bills.component';
import { UsersComponent } from 'app/pages/users/users.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'states', component: StatesComponent },
  { path: 'coins', component: CoinsComponent },
  { path: 'bills', component: BillsComponent }
];
