import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMantenimientosRoutingModule } from './tipo-mantenimientos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    TipoMantenimientosRoutingModule,
    SharedModule
  ]
})
export class TipoMantenimientosModule { }
