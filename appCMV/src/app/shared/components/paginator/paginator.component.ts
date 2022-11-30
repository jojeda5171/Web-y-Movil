import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cmv-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Output() onChangePage:EventEmitter<number> = new EventEmitter<number>();
  @Input()length!:number;
  pageSize=environment.PAGE_SIZE;
  currentPage=0;

  constructor() { }

  ngOnInit(): void {
  }

  changePage(event:any){
    this.currentPage=event.pageIndex ?? event.value;
    this.onChangePage.emit(this.currentPage);
  }

}
