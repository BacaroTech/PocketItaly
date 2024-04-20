import { Component } from '@angular/core';
import { PocketTableComponent } from '../../components/pocket-table/pocket-table.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [PocketTableComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {

}
