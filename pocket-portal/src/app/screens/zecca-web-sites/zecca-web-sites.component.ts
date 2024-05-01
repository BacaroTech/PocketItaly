import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  PocketHeaderTable,
  PocketTableComponent,
} from '../../components/pocket-table/pocket-table.component';
import { WebPocketReport } from '../../interfaces/models.interface';
import { ZeccaService } from '../../services/zecca.service';

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
      id: 'reportNumber',
      label: 'ID'
    },
    {
      id: 'domain',
      label: 'Dominio'
    },
    {
      id: 'urlProduct',
      label: 'URL Prodotto'
    },
    {
      id: 'levelFake',
      label: 'Grado'
    },
    {
      id: 'date',
      label: 'Data'
    }
  ];
  dataTable: any[] = [];

  constructor(
    private service: ZeccaService,
    private router: Router
  ) {}
  
  ngAfterViewInit() {
    this.service.getWebReports().subscribe((r) => {
      this.dataTable = r.map(report => ({
        ...report,
        date: new Date(report.date).toDateString(),
      }));
    })

  }
  openDetail(item: WebPocketReport) {
    this.router.navigateByUrl('zecca/web-site/' + item.id)
  }
  
}
