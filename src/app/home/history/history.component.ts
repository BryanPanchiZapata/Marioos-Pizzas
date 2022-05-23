import { Component, OnInit } from '@angular/core';
import { history } from 'src/app/interface/history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  history = history;
  constructor() {}

  ngOnInit(): void {}
}
