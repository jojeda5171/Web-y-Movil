import { Component, ContentChildren, Input, OnInit, QueryList, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';



@Component({
  selector: 'cmv-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any
  @Input() metaDataColumns!: MetaDataColumn[];
  columns: string[] = []

  @ContentChildren(MatColumnDef,{descendants:true})columnsDef!:QueryList<MatColumnDef>
  @ViewChild(MatTable,{static:true})table!:MatTable<any>

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    if(changes['metaDataColumns']){
      this.columns=this.metaDataColumns.map((x)=>x.field)
    }
  }

  ngAfterContentInit() {
    if (!this.columnsDef) { return }
    this.columnsDef.forEach(columnDef => {
      this.columns.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    })
  }

}

export function getPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();
  paginatorIntl.itemsPerPageLabel = "Items por Página:";
  paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };
  paginatorIntl.nextPageLabel = "Página Siguiente";
  paginatorIntl.previousPageLabel = "Página Anterior";
  paginatorIntl.firstPageLabel = "Primera Página";
  paginatorIntl.lastPageLabel = "Última Página";
  return paginatorIntl;
}
