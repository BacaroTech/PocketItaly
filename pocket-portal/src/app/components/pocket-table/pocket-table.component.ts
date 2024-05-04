import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

type PocketSortColumn = "ASC" | "DESC";

export type PocketHeaderTable = {
  label: string;
  id: string;
  order?: number;
  sort?: PocketSortColumn;
}
type PocketHeaderRows = {
  id: string;
  value: string;
}

@Component({
  selector: 'app-pocket-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pocket-table.component.html',
  styleUrl: './pocket-table.component.css'
})
export class PocketTableComponent {
  
  @Output() 
  detailClick: EventEmitter<any> = new EventEmitter();

  @Input()
  headerList: PocketHeaderTable[] = [];
  @Input()
  dataTable: any[] = [];

  indexClicked: number | null = null;
  _headerKeys: string[] = [];

  get headerKeys(): string[] {
    if (this._headerKeys.length === 0)
     this._headerKeys = this.headerList.map(a => a.id);

    return this._headerKeys;
  }

  clickRow(_index: number) {
    console.log(_index, this.indexClicked)
    if (this.indexClicked === _index) {
      this.detailClick.emit(this.dataTable[this.indexClicked]);
    }
    this.indexClicked = _index;
  }

  detail(item: any) {
    this.detailClick.emit(item);
  }
}
