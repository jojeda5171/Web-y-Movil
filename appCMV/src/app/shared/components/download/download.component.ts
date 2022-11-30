import { Component, Input, OnInit, Output } from '@angular/core';
import { AgenciasModule } from 'src/app/agencias/agencias.module';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AgencyServiceService } from 'src/app/services/agencyService.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import * as XLSX from 'xlsx';

@Component({
  selector: 'cmv-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {


  constructor(private agencyService:AgencyServiceService) {

  }

  ngOnInit(): void {
  }

  export() {

  }

  openPdfTables() {

    const documentDefinition = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              //[this.metaDataColumns[0].title, this.metaDataColumns[1].title, this.metaDataColumns[2].title],
              //...this.records.map((item) => [item._id, item.name, item.address])
              [this.agencyService.getMetaDataColumns()[0].title, this.agencyService.getMetaDataColumns()[1].title, this.agencyService.getMetaDataColumns()[2].title],
              ...this.agencyService.getRecords().map((item) => [item._id, item.name, item.address])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  downloadPdfTables() {

    const documentDefinition = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              //[this.metaDataColumns[0].title, this.metaDataColumns[1].title, this.metaDataColumns[2].title],
              //...this.records.map((item) => [item._id, item.name, item.address])
              [this.agencyService.getMetaDataColumns()[0].title, this.agencyService.getMetaDataColumns()[1].title, this.agencyService.getMetaDataColumns()[2].title],
              ...this.agencyService.getRecords().map((item) => [item._id, item.name, item.address])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).download();
  }

  printPdfTables() {
    const documentDefinition = {
      content: [
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              //[this.metaDataColumns[0].title, this.metaDataColumns[1].title, this.metaDataColumns[2].title],
              //...this.records.map((item) => [item._id, item.name, item.address])
              [this.agencyService.getMetaDataColumns()[0].title, this.agencyService.getMetaDataColumns()[1].title, this.agencyService.getMetaDataColumns()[2].title],
              ...this.agencyService.getRecords().map((item) => [item._id, item.name, item.address])
            ]
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).print();
  }

  exportToExcel():void{
    let name = 'Agencias.xlsx';
    //let element = document.getElementById('season-tble');
    let element=this.agencyService.getRecords();
    //const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, name);

  }


}
