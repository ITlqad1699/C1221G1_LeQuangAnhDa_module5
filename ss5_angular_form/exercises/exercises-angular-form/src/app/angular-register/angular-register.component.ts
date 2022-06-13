import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterPojo} from '../model/register-pojo';
import {Router} from '@angular/router';
import {RegisterService} from '../service/register-service';

@Component({
  selector: 'app-angular-register',
  templateUrl: './angular-register.component.html',
  styleUrls: ['./angular-register.component.css']
})
export class AngularRegisterComponent implements OnInit {

  register: RegisterPojo[] = [];
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    age: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  });

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  constructor(private router: Router,
              private registerService: RegisterService) {
  }

  ngOnInit(): void {

  }

  onsubmit() {
    if (this.age.value != '') {
      if (this.age.value < 18) {
        this.age.setErrors({active: '>18'});
      }
    }
    if (this.password.value != '' && this.confirmPassword.value != '') {
      if (this.password.value != this.confirmPassword.value) {
        this.password.setErrors({validpass: 'password == confirmPassword'});
        this.confirmPassword.setErrors({validpass: 'password == confirmPassword'});
      }
    }
    const register = this.registerForm.value;
    console.log(register);
    this.registerService.create(register);
  }
}
