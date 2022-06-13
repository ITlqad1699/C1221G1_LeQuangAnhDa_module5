import {Injectable} from '@angular/core';
import {RegisterPojo} from '../model/register-pojo';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private registers: RegisterPojo[] = [
    {
      id: 1,
      email: 'lqad@gmail.com',
      password: '123',
      confirmPassword: '123',
      age: 22,
      country: 'Việt Nam',
      gender: 1,
      phone: '0962654467'
    },
    {
      id: 2,
      email: 'lqad1699@gmail.com',
      password: '123',
      confirmPassword: '123',
      age: 22,
      country: 'Việt Nam',
      gender: 1,
      phone: '0989507471'
    }
  ];

  create(register: any) {
    register.id = this.registers.length + 1;
    this.registers.push(register);
  }

  getAll() {
    return this.registers;
  }
}
