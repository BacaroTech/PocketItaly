import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  PocketHeaderTable,
  PocketTableComponent,
} from '../../components/pocket-table/pocket-table.component';
import { ZeccaService } from '../../services/zecca.service';
import { ManualPocketReportTable } from './zecca-report.interface';

@Component({
  selector: 'app-zecca-report',
  standalone: true,
  imports: [PocketTableComponent],
  templateUrl: './zecca-report.component.html',
  styleUrl: './zecca-report.component.css'
})
export class ZeccaReportComponent {
  public headerList: PocketHeaderTable[] = [
    {
      id: 'reportNumber',
      label: 'ID'
    },
    {
      id: 'user',
      label: 'Utente'
    },
    {
      id: 'email',
      label: 'Email'
    },
    {
      id: 'tradeType',
      label: 'Tipologia'
    },
    {
      id: 'date',
      label: 'Data'
    }
  ];

  public dataTable: ManualPocketReportTable[] = [];
  
  constructor(
    private service: ZeccaService,
    private router: Router
  ) {}
  
  ngAfterViewInit() {
    this.service.getManualReports().subscribe((r) => {
      this.dataTable = r.map(report => ({
        ...report,
        date: new Date(report.date).toDateString(),
        tradeType: report.tradeType === 'physic' ? 'fisico' : 'online'
      }));
    })

  }

  openDetail(item: ManualPocketReportTable) {
    this.router.navigateByUrl('zecca/report/' + item.id)
  }
  
}
