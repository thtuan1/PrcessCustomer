import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DemoMaterialModule} from'./demo-material-module.service';
import { SpinnerComponent } from './comon-share/spinner.component';
import { RouterModule } from '@angular/router';
import {AppRoutes} from './app-routing.module'
import { FullComponent } from './layout/full.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import {SharedModule} from './comon-share/comon-share.component';
import {LoginComponent} from '../app/app-Func/login/login.component';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule,DatePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './app-Func/register/register.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeCustomerComponent } from './app-Func/customer/home-customer/home-customer.component';
import { CreateCustomerComponent } from './app-Func/customer/create-customer/create-customer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeAgentComponent } from './app-Func/agent/home-agent/home-agent.component';
import { CreateAgentComponent } from './app-Func/agent/create-agent/create-agent.component';
import { HomeCategoryComponent } from './app-Func/category/home-category/home-category.component';
import { CreateCategoryComponent } from './app-Func/category/create-category/create-category.component';
import { CreateLabelComponent } from './app-Func/label/create-label/create-label.component';
import { HomeLabelComponent } from './app-Func/label/home-label/home-label.component';
import { EditLabelComponent } from './app-Func/label/edit-label/edit-label.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SpinnerComponent,
        FullComponent,
        SidebarComponent,
        LoginComponent,
        RegisterComponent,
        HomeCustomerComponent,
        CreateCustomerComponent,
        HomeAgentComponent,
        CreateAgentComponent,
        HomeCategoryComponent,
        CreateCategoryComponent,
        CreateLabelComponent,
        HomeLabelComponent,
        EditLabelComponent,
    ],
    providers: [DatePipe],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        MatSnackBarModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MatSelectModule,
        BrowserAnimationsModule,
        DemoMaterialModule,
        SharedModule,
        CommonModule,
        MatExpansionModule,
        CdkTableModule,
        RouterModule.forRoot(AppRoutes)
    ]
})
export class AppModule { }
