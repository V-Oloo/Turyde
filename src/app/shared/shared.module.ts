import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelect2Module } from 'ng-Select2';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbDatepickerModule,
    NgSelect2Module,
    TabsModule,
    SelectDropDownModule,
    ModalModule.forRoot(),
    ButtonsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbDatepickerModule,
    NgSelect2Module,
    TabsModule,
    SelectDropDownModule,
    ModalModule,
    ButtonsModule,
    BsDropdownModule,
    AlertModule
  ]
})
export class SharedModule { }
