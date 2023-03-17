import { Routes } from '@angular/router';
import { LoginComponent } from './app-Func/login/login.component';
import { RegisterComponent } from './app-Func/register/register.component';
import { FullComponent } from './layout/full.component';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        loadChildren: () => import('./dashboard/dashboard.module.service').then(m => m.DashboardModule)
      },
      {
        path: '',
        loadChildren: () => import('./app-Func/function.module.service').then(m => m.FunctionComponent)
      }
    ]
  }]