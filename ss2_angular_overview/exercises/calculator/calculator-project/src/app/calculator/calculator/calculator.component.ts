import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numbers: string = "0";
  results: string = "0";
  constructor() { }

  ngOnInit(): void {
  }

  getValue(value: any) {
      if(this.numbers === "0"){
        this.numbers = value;
      } else {
        this.numbers += value;
      }
  }

  calculate() {
    this.results = eval(this.numbers);
  }

  clear() {
    this.numbers = "0";
    this.results = "0";
  }

  clearNum() {
    this.numbers = this.numbers.substring(0,this.numbers.length-1);
  }
}
