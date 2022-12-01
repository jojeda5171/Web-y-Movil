import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    {_id:1, tipe:'Cambio de aceite', client:'Jose Perez', agencia:'Ambato'},
    {_id:2, tipe:'Cambio de aceite', client:'Maria Gonzalez', agencia:'Quito'},
    {_id:3, tipe:'Cambio de aceite', client:'Pedro Martinez', agencia:'Guayaquil'},
    {_id:4, tipe:'Reparacion de motor', client:'Ana Lopez', agencia:'Manta'},
    {_id:5, tipe:'Reparacion de motor', client:'Luis Garcia', agencia:'Riobamba'},
    {_id:6, tipe:'Cambio de aceite', client:'Sandra Rodriguez', agencia:'Quito'},
    {_id:7, tipe:'Cambio de pastillas', client:'Miguel Fernandez', agencia:'Guayaquil'},
    {_id:8, tipe:'Cambio de zapatas', client:'Jorge Gomez', agencia:'Manta'},
    {_id:9, tipe:'Cambio del disco de embrague', client:'Laura Sanchez', agencia:'Riobamba'},
    {_id:10, tipe:'Revisión del sistema eléctrico', client:'Carlos Jimenez', agencia:'Quito'},
    {_id:11, tipe:'Cambio de aceite', client:'Sofia Ruiz', agencia:'Guayaquil'},
    {_id:12, tipe:'Cambio de aceite', client:'Marta Hernandez', agencia:'Manta'},
    {_id:13, tipe:'Cambio de aceite', client:'Pablo Diaz', agencia:'Riobamba'},
    {_id:14, tipe:'Cambio de aceite', client:'Lucia Moreno', agencia:'Quito'},
    {_id:15, tipe:'Cambio de aceite', client:'Rosa Alvarez', agencia:'Guayaquil'}
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "tipe", title: "Tipo" },
    { field: "client", title: "Cliente" },
    { field: "agencia", title: "Agencia" }
  ];

  data: any[] = [];
  totalRecords = this.data.length;

  keypadButtons: KeypadButton[] = [
    { icon: "cloud_download", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet) {
    this.loadTracing();
  }

  ngOnInit(): void {
  }

  loadTracing() {
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

  doAction(action: string) {
    switch (action) {
      case "DOWNLOAD":
        this.showBottomSheet("Lista de Seguimiento", "Seguimiento", this.records, this.metaDataColumns);
        break;
      case "NEW":
        this.openForm();
        break;
    }
  }

  showBottomSheet(title: string, fileName: string, data: any, header:any) {
    this.bottomSheet.open(DownloadComponent);
    DownloadComponent.title = title;
    DownloadComponent.fileName = fileName;
    DownloadComponent.data = data;
  }
}
