import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _id: 1, name: 'Facebook', tipe: 'Red Social' },
    { _id: 2, name: 'Instagram', tipe: 'Red Social' },
    { _id: 3, name: 'Twitter', tipe: 'Red Social' },
    { _id: 4, name: 'Youtube', tipe: 'Red Social' },
    { _id: 5, name: 'Linkedin', tipe: 'Red Social' },
    { _id: 6, name: 'Gmail', tipe: 'Email' },
    { _id: 7, name: 'Hotmail', tipe: 'Email' },
    { _id: 8, name: 'Yahoo', tipe: 'Email' },
    { _id: 9, name: 'Outlook', tipe: 'Email' },
    { _id: 10, name: 'Agencia', tipe: 'Presencial' }
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "name", title: "Nombre" },
    { field: "tipe", title: "Tipo" }
  ];

  data: any[] = [];
  totalRecords = this.data.length;

  constructor() {
    this.loadChannels();
  }

  ngOnInit(): void {
  }

  loadChannels() {
    this.data=this.records;
    this.totalRecords=this.records.length;
    this.changePage(0);
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = page * pageSize;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm() {
  }

  delete(id: any) {

  }

}
