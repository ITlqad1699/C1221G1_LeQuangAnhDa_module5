import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServices {
  private readonly API_URL = 'http://localhost:3000/employee';

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL).pipe((response: any) => response);
  }
}
