import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../model/login';
import {Router} from '@angular/router';
import {LoginService} from '../service/login-service';
import {RegisterService} from '../service/register-service';

@Component({
  selector: 'app-login-angular',
  templateUrl: './login-angular.component.html',
  styleUrls: ['./login-angular.component.css']
})
export class LoginAngularComponent implements OnInit {
  loginObject: Login = new Login();
  
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router: Router,
              private loginService: LoginService,
              private registerService: RegisterService) {
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }
  ngOnInit(): void {
  }

  onsubmit() {
  }
}
