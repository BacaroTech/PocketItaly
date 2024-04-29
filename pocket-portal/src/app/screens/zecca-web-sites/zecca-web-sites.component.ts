import { Component } from '@angular/core';
import { PocketHeaderTable, PocketTableComponent } from '../../components/pocket-table/pocket-table.component';

@Component({
  selector: 'app-zecca-web-sites',
  standalone: true,
  imports: [PocketTableComponent],
  templateUrl: './zecca-web-sites.component.html',
  styleUrl: './zecca-web-sites.component.css'
})
export class ZeccaWebSitesComponent {
  headerList: PocketHeaderTable[] = [
    {
      id: 'id',
      label: 'ID'
    },
    {
      id: 'dominio',
      label: 'Dominio'
    },
    {
      id: 'url_product',
      label: 'URL Prodotto'
    },
    {
      id: 'grade',
      label: 'Grado'
    },
    {
      id: 'date',
      label: 'Data'
    }
  ];
  dataTable: any[] = [
    { id: '4545', dominio: 'Amazon', url_product: 'www.amazon.it/prodott/2121', grado: 92, date: '25/02/2024' },
    { id: '45ER', dominio: 'Ebay', url_product: 'www.amazon.it/prodott/2121', grado: 92, date: '25/02/2024' },
    { id: '5112', dominio: 'Vinted', url_product: 'www.amazon.it/prodott/2121', grado: 92, date: '25/02/2024' },
    { id: '1125', dominio: 'Subitp', url_product: 'www.amazon.it/prodott/2121', grado: 92, date: '25/02/2024' },
  ];
}
