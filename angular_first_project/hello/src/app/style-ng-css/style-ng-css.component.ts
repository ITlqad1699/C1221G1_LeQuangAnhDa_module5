import { Component, OnInit } from '@angular/core';
import {NgStyleClass} from './ng-style-class';

@Component({
  selector: 'app-style-ng-css',
  templateUrl: './style-ng-css.component.html',
  styleUrls: ['./style-ng-css.component.css']
})
export class StyleNgCssComponent implements OnInit {
  colorInput: string;
  ngStyle = new NgStyleClass();
  constructor() { }

  ngOnInit(): void {
  }

}
