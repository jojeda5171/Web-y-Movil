import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MecanicosRoutingModule } from './mecanicos-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    MecanicosRoutingModule,
    SharedModule
  ]
})
export class MecanicosModule { }
