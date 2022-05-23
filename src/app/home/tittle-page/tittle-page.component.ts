import { Component, OnInit } from '@angular/core';
import { tittlepages } from 'src/app/interface/tittle-page';

@Component({
  selector: 'app-tittle-page',
  templateUrl: './tittle-page.component.html',
  styleUrls: ['./tittle-page.component.css'],
})
export class TittlePageComponent implements OnInit {
  tittlepages = tittlepages;
  constructor() {}

  ngOnInit(): void {}
}
