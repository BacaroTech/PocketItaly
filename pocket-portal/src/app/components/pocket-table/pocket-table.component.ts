import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
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

  @Input()
  headerList: PocketHeaderTable[] = [];
  @Input()
  dataTable: any[] = [];

  _headerKeys: string[] = [];

  get headerKeys(): string[] {
    if (this._headerKeys.length === 0)
     this._headerKeys = this.headerList.map(a => a.id);

    return this._headerKeys;
  }
}
