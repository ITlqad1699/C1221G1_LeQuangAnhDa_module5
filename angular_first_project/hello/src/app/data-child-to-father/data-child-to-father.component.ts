import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-child-to-father',
  templateUrl: './data-child-to-father.component.html',
  styleUrls: ['./data-child-to-father.component.css']
})
export class DataChildToFatherComponent implements OnInit {
  count = 0;
  // @Output()
  // countChanged: EventEmitter<number> = new EventEmitter<number>();
  //
  // increment() {
  //   this.count++;
  //   this.countChanged.emit(this.count);
  // }
  //
  // decrement() {
  //   this.count--;
  //   this.countChanged.emit(this.count);
  // }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
