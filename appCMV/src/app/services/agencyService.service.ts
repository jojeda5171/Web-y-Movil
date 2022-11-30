import { Injectable } from '@angular/core';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';


@Injectable({
  providedIn: 'root'
})
export class AgencyServiceService {

  private records: any[] = [
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

  private metaDataColumns: MetaDataColumn[] = [
    { field: "_id", title: "Id" },
    { field: "name", title: "Agencia" },
    { field: "address", title: "Dirección" }
  ];

  constructor() {

  }

  getRecords(): any[] {
    return this.records;
  }

  getMetaDataColumns(): MetaDataColumn[] {
    return this.metaDataColumns;
  }

}
