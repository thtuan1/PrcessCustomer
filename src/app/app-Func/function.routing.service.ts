import { Routes } from '@angular/router';
import { HomeAgentComponent } from './agent/home-agent/home-agent.component';
import { HomeCategoryComponent } from './category/home-category/home-category.component';
import { HomeCustomerComponent } from './customer/home-customer/home-customer.component';
import { HomeLabelComponent } from './label/home-label/home-label.component';

export const FunctionRouting: Routes = [
  {
    path: 'customer',
    component: HomeCustomerComponent
  },
  {
    path: 'agent',
    component: HomeAgentComponent
  },
  {
    path: 'category',
    component: HomeCategoryComponent
  },
  {
    path: 'label',
    component: HomeLabelComponent
  },
  {
    path: 'label/:id',
    component: HomeLabelComponent
  }
]
