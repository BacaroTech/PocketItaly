import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as L from 'leaflet';

import { MapPocketReport } from '../../interfaces/models.interface';
import { ZeccaService } from '../../services/zecca.service';
import {
  purpleIcon,
  redIcon,
} from '../../utils/icons';

L.Icon.Default.imagePath = 'assets/leaflet/';
type LevelWarning = 'low' | 'high'
type MapItem = {
  latlng: L.LatLngExpression,
  level: LevelWarning,
  id: number,
}


@Component({
  selector: 'app-zecca-map',
  standalone: true,
  imports: [],
  templateUrl: './zecca-map.component.html',
  styleUrl: './zecca-map.component.css'
})
export class ZeccaMapComponent {
  private map!: L.Map

  private markers: L.Marker[] = [];
  private report: MapPocketReport[] = [];

  constructor(
    private service: ZeccaService,
    private router: Router
  ) { }

  initMarker() {

    const markers: L.Marker[] = [];
    for (const mapItem of this.report) {
      const m = L.marker([mapItem.lat, mapItem.long], { icon: mapItem.outcome === "positive" ? purpleIcon : redIcon })
      m.bindPopup(
        '<div class="flex flex-col justify-center items-center">' +
        '<p class="w-fit text-lg text-white">Segnalazione n.' + mapItem.reportNumber + '</p>' +
        '<button class="detail rounded-full bg-pocket_yellow px-10 py-1 text-lg font-normal leading-8 text-black shadow-sm hover:bg-pocket_yellow_p-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pocket_yellow_p-600"> Visualizza </button>' +
        '</div>'
        , {
          'className': 'popupCustom'
        }
      )
        .on("popupopen", (a) => {
          const popUp = a.target.getPopup()
          popUp.getElement()
            .querySelector(".detail")
            .addEventListener("click", () => {
              this.openDetail(mapItem);
            });
        })
      markers.push(m);
    }

    this.markers = markers;
  }
  openDetail(item: MapPocketReport) {
    this.router.navigateByUrl('zecca/map/' + item.id)
  }

  ngAfterViewInit() {
    this.service.getMapReports().subscribe((r) => {
      this.report = r;
      this.initMarker();
      this.initializeMap();
      this.addMarkers();
      this.centerMap();
    })

  }

  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map');
    L.tileLayer(baseMapURl).addTo(this.map);
  }

  private addMarkers() {
    // Add your markers to the map
    this.markers.forEach(marker => marker.addTo(this.map));
  }

  private centerMap() {
    // Create a LatLngBounds object to encompass all the marker locations
    const bounds = L.latLngBounds(this.markers.map(marker => marker.getLatLng()));

    // Fit the map view to the bounds
    this.map.fitBounds(bounds);
  }
}
