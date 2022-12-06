import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';

import { MatTableExporterModule } from 'mat-table-exporter';
import { FormComponent } from './components/form/form.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PageListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule,
    SharedModule,
    MatTableExporterModule,
    MatToolbarModule
  ]
})
export class AgenciasModule { }
