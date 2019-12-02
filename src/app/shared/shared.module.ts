import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgxSelectModule } from 'ngx-select-ex';
// import {Grid} from '@ag-grid-community/all-modules';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbDatepickerModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule,
    NgxSelectModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    // Grid
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbDatepickerModule,
    TabsModule,
    ModalModule,
    BsDatepickerModule,
    NgxSelectModule,
    ButtonsModule,
    BsDropdownModule,
    AlertModule,
    // Grid
  ]
})
export class SharedModule { }
