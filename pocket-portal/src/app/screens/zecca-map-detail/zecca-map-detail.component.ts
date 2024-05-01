import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as L from 'leaflet';

import { MapPocketReport } from '../../interfaces/models.interface';
import { ZeccaService } from '../../services/zecca.service';
import {
  purpleIcon,
  redIcon,
} from '../../utils/icons';

@Component({
  selector: 'app-zecca-map-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './zecca-map-detail.component.html',
  styleUrl: './zecca-map-detail.component.css'
})
export class ZeccaMapDetailComponent {
  private map!: L.Map

  id: string | undefined;
  item: MapPocketReport | undefined;
  private markers: L.Marker[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: ZeccaService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.service.getMapReportById(this.id)
          .subscribe((mapItem) => {
            const markers: L.Marker[] = [];
            
            if (mapItem) {
              this.item = mapItem;
              console.log(mapItem.lat, mapItem.long)
              const m = L.marker([mapItem.lat, mapItem.long], { icon: mapItem.outcome === "positive" ? purpleIcon : redIcon })
              markers.push(m);
              this.markers = markers;
              this.initializeMap();
              this.addMarkers();
              this.centerMap();

            }

          })
      }
    });
  }

  private initializeMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    this.map = L.map('map-detail', {
      zoom: 6
    });
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
    this.map.setZoom(14)
  }

}
