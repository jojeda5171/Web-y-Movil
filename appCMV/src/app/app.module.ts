import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableExporterModule } from 'mat-table-exporter';

//import { PdfMakeWrapper } from 'pdfmake-wrapper';
//import * as pdfFonts from "pdfmake/build/vfs_fonts";
//PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatSidenavModule,
    MatTableExporterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
