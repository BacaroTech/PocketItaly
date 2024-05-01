import * as L from 'leaflet';

const size = 16;
const _anchor = 8;
const redIcon = L.icon({
    iconUrl: '/assets/img/dot-red.png',

    iconSize:     [size, size], // size of the icon
    shadowSize:   [size, size], // size of the shadow
    iconAnchor:   [_anchor, _anchor], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});


const purpleIcon = L.icon({
    iconUrl: '/assets/img/dot-purple.png',

    iconSize:     [size, size], // size of the icon
    shadowSize:   [size, size], // size of the shadow
    iconAnchor:   [_anchor, _anchor], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

export { purpleIcon, redIcon };