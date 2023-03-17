import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule,DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../demo-material-module.service';
import {FunctionRouting} from '../app-Func/function.routing.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditLabelComponent } from './label/edit-label/edit-label.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FunctionRouting),
    DemoMaterialModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
  ],
  providers: [DatePipe,EditLabelComponent],
  entryComponents: [],
  declarations: [
  ]
})
export class FunctionComponent {}

