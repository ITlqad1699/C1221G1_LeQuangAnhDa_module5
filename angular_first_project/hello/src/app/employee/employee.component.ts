import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees = [
    {
      name: 'Laxman', email: 'laxman@gmail.com',
      skills: [{ skill: 'Angular', exp: '2' }, { skill: 'Javascript', exp: '7' }, { skill: 'TypeScript', exp: '3' }
      ]
    },
    {
      name: 'Laxman', email: 'laxman@gmail.com',
      skills: [{ skill: 'Angular', exp: '1' }, { skill: 'Android', exp: '3' }, { skill: 'React', exp: '2' }
      ]
    },
    {
      name: 'Laxman', email: 'laxman@gmail.com',
      skills: [{ skill: 'HTML', exp: '2' }, { skill: 'CSS', exp: '2' }, { skill: 'Javascript', exp: '1' }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
