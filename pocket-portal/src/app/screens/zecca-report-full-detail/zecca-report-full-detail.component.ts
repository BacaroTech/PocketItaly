import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ManualPocketReport } from '../../interfaces/models.interface';
import { ZeccaService } from '../../services/zecca.service';

@Component({
  selector: 'app-zecca-report-full-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './zecca-report-full-detail.component.html',
  styleUrl: './zecca-report-full-detail.component.css'
})
export class ZeccaReportFullDetailComponent {
  id: string | undefined;
  item: ManualPocketReport | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: ZeccaService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.service.getManualReportById(this.id)
          .subscribe((params) => {
            if (params) {
              this.item = params;
            }
          })
      }
    });
  }

}
