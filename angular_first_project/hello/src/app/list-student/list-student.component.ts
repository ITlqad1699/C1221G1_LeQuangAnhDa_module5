import {Component, OnInit} from '@angular/core';

export interface IStudent {
  id: number;
  name: string;
  mark: number;
  image: string;
}

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student: IStudent = {
    id: 1, image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png', mark: 0, name: 'nguyen van a'

  };
  constructor() {
  }

  ngOnInit(): void {
  }


  getMark(value: any) {
    this.student.mark = value;
  }
}
