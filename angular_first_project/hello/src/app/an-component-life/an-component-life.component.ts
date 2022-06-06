import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-an-component-life',
  templateUrl: './an-component-life.component.html',
  styleUrls: ['./an-component-life.component.css']
})
export class AnComponentLifeComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  countChild;

  constructor() {
    console.log('constructor: an-component-life');
  }

  ngOnInit(): void {
    console.log('OnInit: child-component');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + JSON.stringify(changes));
  }

  increment() {
    this.countChild++;
  }

  ngDoCheck(): void {
    console.log(this.countChild);
  }
}
