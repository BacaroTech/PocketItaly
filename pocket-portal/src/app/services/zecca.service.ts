import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  first,
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

  fakeCacheReports: RawPocketReport[] = [];

  constructor(private http: HttpClient) { }

  getReports() {
    return this.http.get<RawPocketReport[]>("/assets/mock/report.json");
    // if (this.fakeCacheReports.length === 0)
    //   return this.http.get<RawPocketReport[]>("/assets/mock/report.json")
    //     .pipe(
    //       switchMap(r => {
    //         this.fakeCacheReports = r;
    //         return of(r);
    //       })
    //     )
    // else
    //   return of(this.fakeCacheReports);
  }
  getMapReportById(id: string): Observable<MapPocketReport | undefined> {
    return this.getMapReports()
      .pipe(
        map(manuals => manuals.find(m => m.id === id)),
        first()
      )
  }
  getManualReportById(id: string): Observable<ManualPocketReport | undefined> {
    return this.getManualReports()
      .pipe(
        map(manuals => manuals.find(m => m.id === id)),
        first()
      )
  }
  getWebReportById(id: string): Observable<WebPocketReport | undefined> {
    return this.getWebReports()
      .pipe(
        map(manuals => manuals.find(m => m.id === id)),
        first()
      )
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
