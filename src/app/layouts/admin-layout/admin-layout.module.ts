import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ServicesComponent } from '../../pages/services/services.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatesComponent } from 'app/pages/states/states.component';
import { CoinsComponent } from 'app/pages/coins/coins.component';
import { TableParametersComponent } from 'app/shared/table-parameters/table-parameters.component';
import { HttpClientModule } from '@angular/common/http';
import { BillsComponent } from 'app/pages/bills/bills.component';
import { SelectParametersComponent } from 'app/shared/select-parameters/select-parameters.component';
import { UsersComponent } from 'app/pages/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    UsersComponent,
    ServicesComponent,
    StatesComponent,
    CoinsComponent,
    TableParametersComponent,
    BillsComponent,
    SelectParametersComponent
  ]
})

export class AdminLayoutModule { }
