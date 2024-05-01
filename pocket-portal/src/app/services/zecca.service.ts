import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import {
  ManualPocketReport,
  MapPocketReport,
  RawPocketReport,
  WebPocketReport,
} from '../interfaces/models.interface';

@Injectable({
  providedIn: 'root',

})
export class ZeccaService {

  constructor(private http: HttpClient) { }

  getReports() {
    return this.http.get<RawPocketReport[]>("/assets/mock/report.json");
  }

  getWebReports(): Observable<WebPocketReport[]> {
    return this.getReports()
      .pipe(

        map((rawList) => {
          const filtered = rawList.filter(r => r.reportType === "web")
          return filtered.map(r => {
            const resultCast: WebPocketReport = r as WebPocketReport;
            return resultCast;
          })
        })
      );
  }
  getManualReports(): Observable<ManualPocketReport[]> {
    return this.getReports()
      .pipe(

        map((rawList) => {
          const filtered = rawList.filter(r => r.reportType === "manual")
          return filtered.map(r => {
            const resultCast: ManualPocketReport = r as ManualPocketReport;
            return resultCast;
          })
        })
      );
  }
  getMapReports(): Observable<MapPocketReport[]> {
    return this.getReports()
      .pipe(

        map((rawList) => {
          const filtered = rawList.filter(r => r.reportType === "map")
          return filtered.map(r => {
            const resultCast: MapPocketReport = r as MapPocketReport;
            return resultCast;
          })
        })
      );
  }
}
