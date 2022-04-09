import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
//import  MapboxDirections  from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

//import * as MapboxDirections from ('@mapbox/mapbox-gl-directions');

// declare var window: any;
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
     .map-container {
      height: 90%;
      width: 100%;
      
    }

    `
  ]
})
export class MarcadoresComponent implements OnInit, AfterViewInit {
  @ViewChild('map') divMap! : ElementRef;
  map! : mapboxgl.Map;
  center : [number, number] = [-75.5583568116464, 6.338445842766202];
  
  constructor() {
   
   }
  ngAfterViewInit(): void {
    setTimeout(() => {
      //console.log(mapboxgl)
      (mapboxgl as any).accessToken = environment.mapBox;
      this.map = new mapboxgl.Map({
       container: this.divMap.nativeElement, // container ID
       style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: this.center, // starting position [lng, lat]
        zoom: 15,// starting zoom,
        
       
         });
         
  
         this.map.addControl( new MapboxGeocoder({
          accessToken: (mapboxgl as any).accessToken, 
           mapboxgl: (mapboxgl as any)
          })
          );
          
        
         this.map.addControl(new mapboxgl.NavigationControl());
         this.map.addControl(new mapboxgl.FullscreenControl());
         this.map.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
              enableHighAccuracy: true
          },
          trackUserLocation: true,
          
      }))

      // const MapboxDirections = window.Mapboxdirections  
      // console.log(MapboxDirections)
      // this.map.addControl(
      //   new MapboxDirections({
      //   accessToken:( mapboxgl as any).accessToken
      //   }),
      //   'top-left'
      //   );
      
    }, 1000);
    

  }

  ngOnInit(): void {
       


  }

}
