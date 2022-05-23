import { Component, OnInit } from '@angular/core';
import { maps } from '../../interface/maps'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  maps = maps;
  title = 'My first AGM project';
  lat = -0.285830;
  lng = -78.542114;
  zoom: number = 90;
  constructor() { }

  ngOnInit(): void {
  }

}
