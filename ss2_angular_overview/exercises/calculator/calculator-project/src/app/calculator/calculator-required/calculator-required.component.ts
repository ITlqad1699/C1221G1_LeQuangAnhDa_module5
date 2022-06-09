import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-required',
  templateUrl: './calculator-required.component.html',
  styleUrls: ['./calculator-required.component.css']
})
export class CalculatorRequiredComponent implements OnInit {

  number1: number;

  number2: number;

  result: string;

  addition() {
    this.result = String(this.number1 + this.number2);
  }

  subtraction() {
    this.result = String(this.number1 - this.number2);
  }

  multiplication() {
    this.result = String(this.number1 * this.number2);
  }

  division() {
    if (this.number2 === 0) {
      this.result = 'Không thể chia cho 0';
    } else {
      this.result = String(this.number1 / this.number2);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
