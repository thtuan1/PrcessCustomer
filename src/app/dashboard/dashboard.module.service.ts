import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule,DatePipe } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SaleOverviewComponent } from './dashboard-component/sale-overview/sale-overview.component';
import { OurVisiterComponent } from './dashboard-component/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-component/profile/profile.component';
import { ContractsComponent } from './dashboard-component/contracts/contracts.component';
import { ActivityTimelineComponent } from './dashboard-component/activity-timeline/activity-timeline.component';

@NgModule({
  imports: [
    CommonModule,
    DatePipe,
    DemoMaterialModule,
    FlexLayoutModule,
    NgApexchartsModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent, SaleOverviewComponent, OurVisiterComponent, ProfileComponent, ContractsComponent, ActivityTimelineComponent,]
})
export class DashboardModule {}
