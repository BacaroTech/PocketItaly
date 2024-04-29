import { CommonModule } from '@angular/common';
import { Component, Input, Pipe, PipeTransform } from '@angular/core';

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

  get headerKeys(): string[] {
     return this.headerList.map(a => a.id);
  }

  transform(value: any, args:string[]): any {
    const keys = Object.keys(value);

    return keys;
  }
}
