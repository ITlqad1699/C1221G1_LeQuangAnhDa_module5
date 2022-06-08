import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from '../models/Company';

@Injectable()
export class InfoCompanyService {

  constructor(private http: HttpClient) {
  }

  getInfoCompany(): Observable<Company> {
    return this.http.get('http://localhost:3000/company')
      .pipe((response: any) => response);
  }
}
