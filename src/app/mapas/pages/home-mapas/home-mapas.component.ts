import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-home-mapas',
  templateUrl: './home-mapas.component.html',
  styles: [
    `
      .map-container {
      height: 100%;
      width: 100%;
    }
    `
  ]
})
export class HomeMapasComponent implements OnInit, AfterViewInit {
  @ViewChild('map') divMap! : ElementRef;
  map! : mapboxgl.Map;

  constructor() { }
  ngAfterViewInit(): void {
    // console.log(this.divMap)
    // this.map = new mapboxgl.Map({
    //   container: this.divMap.nativeElement, // container ID
    //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
    //    center: [-75.5583568116464, 6.338445842766202], // starting position [lng, lat]
    //    zoom: 15,// starting zoom,
      
    //     });
  }

  ngOnInit(): void {
    // this.map = new mapboxgl.Map({
    //   container: this.divMap.nativeElement, // container ID
    //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
    //    center: [-75.5583568116464, 6.338445842766202], // starting position [lng, lat]
    //    zoom: 15,// starting zoom,
      
    //     });
  }

}
