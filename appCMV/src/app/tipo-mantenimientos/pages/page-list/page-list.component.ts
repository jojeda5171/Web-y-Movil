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
    { _id: 1, tipe: 'Preventivo', client: 'Jose Perez', agencia: 'Ambato' },
    { _id: 2, tipe: 'Preventivo', client: 'Maria Gonzalez', agencia: 'Quito' },
    { _id: 3, tipe: 'Correctivo', client: 'Pedro Martinez', agencia: 'Guayaquil' },
    { _id: 4, tipe: 'Correctivo', client: 'Ana Lopez', agencia: 'Manta' },
    { _id: 5, tipe: 'Correctivo', client: 'Luis Garcia', agencia: 'Riobamba' },
    { _id: 6, tipe: 'Preventivo', client: 'Sandra Rodriguez', agencia: 'Quito' },
    { _id: 7, tipe: 'Preventivo', client: 'Miguel Fernandez', agencia: 'Guayaquil' },
    { _id: 8, tipe: 'Preventivo', client: 'Jorge Gomez', agencia: 'Manta' },
    { _id: 9, tipe: 'Preventivo', client: 'Laura Sanchez', agencia: 'Riobamba' },
    { _id: 10, tipe: 'Correctivo', client: 'Carlos Jimenez', agencia: 'Quito' },
    { _id: 11, tipe: 'Preventivo', client: 'Sofia Ruiz', agencia: 'Guayaquil' },
    { _id: 12, tipe: 'Preventivo', client: 'Marta Hernandez', agencia: 'Manta' },
    { _id: 13, tipe: 'Preventivo', client: 'Pablo Diaz', agencia: 'Riobamba' },
    { _id: 14, tipe: 'Preventivo', client: 'Lucia Moreno', agencia: 'Quito' },
    { _id: 15, tipe: 'Correctivo', client: 'Rosa Alvarez', agencia: 'Guayaquil' }
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "tipe", title: "Tipo" },
    { field: "client", title: "Cliente" },
    { field: "agencia", title: "Agencia" }
  ];

  data: any[] = [];
  totalRecords = this.data.length;

  constructor() {
    this.loadMaintenance();
  }

  ngOnInit(): void {
  }

  loadMaintenance() {
    this.data = this.records;
    this.totalRecords = this.records.length;
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
