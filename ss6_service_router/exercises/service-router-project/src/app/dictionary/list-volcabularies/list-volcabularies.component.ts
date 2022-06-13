import {Component, OnInit} from '@angular/core';
import {Vocabulary} from '../models/vocabulary';
import {DictionaryService} from '../service/dictionary.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-volcabularies',
  templateUrl: './list-volcabularies.component.html',
  styleUrls: ['./list-volcabularies.component.css']
})
export class ListVolcabulariesComponent implements OnInit {
  volcabularies: Vocabulary[] = [];

  constructor(private dictionaryService: DictionaryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.volcabularies = this.dictionaryService.getAll();
  }
}
