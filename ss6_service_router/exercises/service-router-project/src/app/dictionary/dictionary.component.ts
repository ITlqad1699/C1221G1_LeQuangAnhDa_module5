import { Component, OnInit } from '@angular/core';
import {DictionaryService} from './service/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  vietnameses: string;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }
  translate(event) {
      this.vietnameses = this.dictionaryService.findVietNamese(event);
  }
}
