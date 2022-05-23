import { Component, OnInit } from '@angular/core';
import { ladingstores } from '../../interface/lading-store';

@Component({
  selector: 'app-lading-story',
  templateUrl: './lading-story.component.html',
  styleUrls: ['./lading-story.component.css'],
})
export class LadingStoryComponent implements OnInit {
  ladingstores = ladingstores;

  constructor() {}

  ngOnInit(): void {}
}
