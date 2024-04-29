import { Component } from '@angular/core';
import { PocketHeaderTable, PocketTableComponent } from '../../components/pocket-table/pocket-table.component';

@Component({
  selector: 'app-zecca-report',
  standalone: true,
  imports: [PocketTableComponent],
  templateUrl: './zecca-report.component.html',
  styleUrl: './zecca-report.component.css'
})
export class ZeccaReportComponent {
  headerList: PocketHeaderTable[] = [
    {
      id: 'id',
      label: 'ID'
    },
    {
      id: 'utente',
      label: 'Utente'
    },
    {
      id: 'email',
      label: 'Email'
    },
    {
      id: 'tipologia',
      label: 'Tipologia'
    },
    {
      id: 'date',
      label: 'Data'
    }
  ];
  dataTable: any[] = [
    { id: '8975', dominio: 'Gianni', email: 'gianni@email.com', tipologia: 'Fisico', date: '25/02/2024' },
    { id: '6931', dominio: 'Luca', email: 'luca@email.com', tipologia: 'Online', date: '25/02/2024' },
    { id: '7489', dominio: 'Giacomo', email: 'giacomo@email.com', tipologia: 'Fisico', date: '25/02/2024' },
    { id: '3265', dominio: 'Andrea', email: 'andrea@email.com', tipologia: 'Online', date: '25/02/2024' },
  ];
}
