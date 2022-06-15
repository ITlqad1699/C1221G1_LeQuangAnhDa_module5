import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Employee} from './models/Employee';
import {EmployeeServices} from './services/EmployeeServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'call-webservice';
  private subcription: Subscription;
  public employees: Employee[] = [];

  constructor(private employeeServices: EmployeeServices) {
  }

  getAllEmployee() {
    this.subcription = this.employeeServices.getAllEmployee()
      .subscribe(data => {
          this.employees = data;
        }, error => {
          console.log(error);
        }
      );
  }
  ngOnInit(): void {
    this.getAllEmployee();
  }
}
