import {Component, OnInit} from '@angular/core';
import {RegisterPojo} from '../model/register-pojo';
import {Router} from '@angular/router';
import {RegisterService} from '../service/register-service';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.css']
})
export class ListRegisterComponent implements OnInit {
  registers: RegisterPojo[];

  constructor(private router: Router,
              private registerService: RegisterService) {
  }

  ngOnInit(): void {
    this.getAllRegister();
  }

  getAllRegister() {
    this.registers = this.registerService.getAll();
  }
}
