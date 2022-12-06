import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { ContainerComponent } from './components/container/container.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { getPaginatorIntl, TableComponent } from './components/table/table.component';

import { MatTableModule } from '@angular/material/table';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';

import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DownloadComponent } from './components/download/download.component';
import {MatListModule} from '@angular/material/list';
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PaginatorComponent,
    KeypadButtonComponent,
    DownloadComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatListModule,
    MatTableExporterModule,
  ],
  exports: [
    TitleComponent,
    ContainerComponent,
    TableComponent,
    PerfectScrollbarModule,
    PaginatorComponent,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    KeypadButtonComponent,
    MatBottomSheetModule,
    DownloadComponent,
    MatListModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
  ]
})
export class SharedModule { }
