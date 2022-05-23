import { Component, OnInit } from '@angular/core';
import { slogans } from '../../interface/slogan'

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.css']
})
export class SloganComponent implements OnInit {

  slogans= slogans
  constructor() { }

  ngOnInit(): void {
  }

}
