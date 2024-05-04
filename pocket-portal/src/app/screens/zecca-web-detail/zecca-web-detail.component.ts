import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WebPocketReport } from 'src/app/interfaces';
import { ZeccaService } from 'src/app/services';

@Component({
  selector: 'app-zecca-web-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './zecca-web-detail.component.html',
  styleUrl: './zecca-web-detail.component.css'
})
export class ZeccaWebDetailComponent {
  id: string | undefined;
  item: WebPocketReport | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: ZeccaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.service.getWebReportById(this.id)
          .subscribe((params) => {
            if (params) {
              this.item = params;
            }
          })
      }
    });
  }
}
