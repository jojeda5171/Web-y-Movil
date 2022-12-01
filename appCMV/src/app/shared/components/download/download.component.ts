import { Component, Input, OnInit, Output } from '@angular/core';
import { AgenciasModule } from 'src/app/agencias/agencias.module';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import * as XLSX from 'xlsx';




@Component({
  selector: 'cmv-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  static title: string;
  static fileName: string;
  static data: any[] = [];
  static header: any[] = [];
  documentDefinition: {
    content: {
    }[];
  };



  constructor() {
  }

  ngOnInit(): void {
  }

  export() {

  }

  controlador() {
    switch (DownloadComponent.fileName) {
      case 'Agencias':
        this.documentDefinition = {
          content: [
            {
              table: {
                headerRows: 1,
                //widths: ['*', '*', '*'],
                body: [
                  [DownloadComponent.header[0].title, DownloadComponent.header[1].title, DownloadComponent.header[2].title],
                  //...this.records.map((item) => [item._id, item.name, item.address])
                  ...DownloadComponent.data.map((item) => [item._id, item.name, item.address])
                ]
              }
            }
          ]
        };
        break;
      case 'Canales':
        this.documentDefinition = {
          content: [
            {
              table: {
                headerRows: 1,
                //widths: ['*', '*', '*'],
                body: [
                  //...this.records.map((item) => [item._id, item.name, item.address])
                  [DownloadComponent.header[0].title, DownloadComponent.header[1].title, DownloadComponent.header[2].title],
                  ...DownloadComponent.data.map((item) => [item._id, item.name, item.tipe])
                ]
              }
            }
          ]
        };
        break;
      case 'Clientes':
        this.documentDefinition = {
          content: [
            {
              table: {
                headerRows: 1,
                //widths: ['*', '*', '*'],
                body: [
                  //...this.records.map((item) => [item._id, item.name, item.address])
                  [DownloadComponent.header[0].title, DownloadComponent.header[1].title, DownloadComponent.header[2].title, DownloadComponent.header[3].title],
                  ...DownloadComponent.data.map((item) => [item._id, item.name, item.lastname, item.phone])
                ]
              }
            }
          ]
        };
        break;
      case 'Mecanicos':
        this.documentDefinition = {
          content: [
            {
              table: {
                headerRows: 1,
                body: [
                  [DownloadComponent.header[0].title, DownloadComponent.header[1].title, DownloadComponent.header[2].title, DownloadComponent.header[3].title],
                  ...DownloadComponent.data.map((item) => [item._id, item.name, item.lastname, item.phone])
                ]
              }
            }
          ]
        };
        break;
      case 'Seguimiento':
        this.documentDefinition = {
          content: [
            {
              table: {
                headerRows: 1,
                body: [
                  [DownloadComponent.header[0].title, DownloadComponent.header[1].title, DownloadComponent.header[2].title, DownloadComponent.header[3].title],
                  ...DownloadComponent.data.map((item) => [item._id, item.tipe, item.client, item.agencia])
                ]
              }
            }
          ]
        };
        break;
      case 'Mantenimientos':
        this.documentDefinition = {
          content: [
            {
              table: {
                headerRows: 1,
                body: [
                  [DownloadComponent.header[0].title, DownloadComponent.header[1].title, DownloadComponent.header[2].title, DownloadComponent.header[3].title],
                  ...DownloadComponent.data.map((item) => [item._id, item.tipe, item.client, item.agencia])
                ]
              }
            }
          ]
        };
        break;
    }
  }

  openPdfTables() {
    this.controlador();
    const pdf = pdfMake.createPdf(this.documentDefinition);
    pdf.fileName = DownloadComponent.fileName;
    pdf.open();
  }

  downloadPdfTables() {
    this.controlador();
    pdfMake.createPdf(this.documentDefinition).download();
  }

  printPdfTables() {
    this.controlador();
    pdfMake.createPdf(this.documentDefinition).print();
  }

  exportToExcel(): void {
    let name = DownloadComponent.fileName + '.xlsx';
    let element = DownloadComponent.data;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, name);

  }
}
