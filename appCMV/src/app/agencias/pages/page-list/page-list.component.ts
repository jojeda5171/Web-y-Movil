import { Component, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DownloadComponent } from 'src/app/shared/components/download/download.component';
import { KeypadButton } from 'src/app/shared/interfaces/keypad.interface';
import { MetaDataColumn } from 'src/app/shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { FormComponent } from '../../components/form/form.component';
import { AgenciaService } from '../../services/agencia.service';

@Component({
  selector: 'cmv-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  records: any[] = [
    { _id: 1, name: 'Ambato', address: 'Calle A' },
    { _id: 2, name: 'Riobamba', address: 'Calle B' },
    { _id: 3, name: 'Quito', address: 'Calle C' },
    { _id: 4, name: 'Guayaquil', address: 'Calle D' },
    { _id: 5, name: 'Cuenca', address: 'Calle E' },
    { _id: 6, name: 'Loja', address: 'Calle F' },
    { _id: 7, name: 'Machala', address: 'Calle G' },
    { _id: 8, name: 'Esmeraldas', address: 'Calle H' },
    { _id: 9, name: 'Manta', address: 'Calle I' },
    { _id: 10, name: 'Portoviejo', address: 'Calle J' },
    { _id: 11, name: 'Tulcan', address: 'Calle K' },
    { _id: 12, name: 'Ibarra', address: 'Calle L' },
    { _id: 13, name: 'Milagro', address: 'Calle M' },
    { _id: 14, name: 'Quevedo', address: 'Calle N' },
    { _id: 15, name: 'Santo Domingo', address: 'Calle O' },
    { _id: 16, name: 'Tena', address: 'Calle P' },
    { _id: 17, name: 'Babahoyo', address: 'Calle Q' },
    { _id: 18, name: 'Macas', address: 'Calle R' },
    { _id: 19, name: 'Tulcán', address: 'Calle S' },
    { _id: 20, name: 'Latacunga', address: 'Calle T' },
    { _id: 21, name: 'Machachi', address: 'Calle U' },
    { _id: 22, name: 'Muisne', address: 'Calle V' },
    { _id: 23, name: 'Nueva Loja', address: 'Calle W' },
    { _id: 24, name: 'Puyo', address: 'Calle X' },
    { _id: 25, name: 'Puerto Francisco de Orellana', address: 'Calle Y' },
    { _id: 26, name: 'Puerto Baquerizo Moreno', address: 'Calle Z' }
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "name", title: "Agencia" },
    { field: "address", title: "Dirección" }
  ];

  data: any[] = [];
  totalRecords = this.data.length;

  keypadButtons: KeypadButton[] = [
    { icon: "cloud_download", tooltip: "EXPORTAR", color: "accent", action: "DOWNLOAD" },
    { icon: "add", tooltip: "AGREGAR", color: "primary", action: "NEW" }
  ]

  constructor(private bottomSheet: MatBottomSheet, private agenciaService: AgenciaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.loadAgencies();
  }

  ngOnInit(): void {
  }

  loadAgencies() {
    this.agenciaService.loadAgencies().subscribe(data => {
      this.records = data;
      this.totalRecords = this.records.length;
      this.changePage(0);
    }, error => {
      console.log(error);
    }
    );

  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = page * pageSize;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };
    const reference: MatDialogRef<FormComponent> = this.dialog.open(FormComponent, options);
    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }
      if (response.id) {
        const agencia = { ...response };
        this.agenciaService.updateAgency(response.id, agencia).subscribe(() => {
          this.loadAgencies();
          this.showMessage('Registro actualizado');
        })
      } else {
        const agencia = { ...response };
        this.agenciaService.addAgency(agencia).subscribe(() => {
          this.loadAgencies();
          this.showMessage('Registro exitoso');
        })
      }
    });

  }

  delete(id: any) {
    console.log(id);
    this.agenciaService.deleteAgency(id).subscribe(() => {
      this.loadAgencies();
      this.showMessage('Registro eliminado');
    });
  }

  doAction(action: string) {
    switch (action) {
      case "DOWNLOAD":
        this.showBottomSheet("Lista de Agencias", "Agencias", this.records, this.metaDataColumns);
        break;
      case "NEW":
        this.openForm();
        break;
    }
  }

  showBottomSheet(title: string, fileName: string, data: any, header: any) {
    this.bottomSheet.open(DownloadComponent);
    DownloadComponent.title = title;
    DownloadComponent.fileName = fileName;
    DownloadComponent.data = data;
    DownloadComponent.header = header;
  }

  showMessage(message: string, duration: number = 5000) {
    this.snackBar.open(message, '', { duration })
  }
}
