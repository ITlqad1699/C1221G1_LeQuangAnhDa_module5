import { Component } from '@angular/core';
import {CssClass} from './css-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  name = 'Lê Quang anh Đà';
  cssStringVar = 'blue';
  cssClass = new CssClass();

  dateValue = '2020-11-01';
  textValue = 'hello';
  fValue: number;
  cValue: number;
  Counter = 5;
  countParent;
  countFather = 5;
  increment() {
    this.Counter++;
  }
  decrement() {
    this.Counter--;
  }
  countChangedHandle(count: number) {
    this.countParent = count;
  }
}
