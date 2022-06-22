import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Transport} from './model/transport';
import {City} from './model/city';

const API_URL = `${environment.url3000}`;
const API_URL8080 = `${environment.url8080}`;

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private httpClient: HttpClient) {
  }

  //Todo đây là phần URL8080
  public getAllTransportationAPI(page: number): Observable<Transport[]> {
    return this.httpClient.get<Transport[]>(API_URL8080 + '/list?page=' + page);
  }

  public fingByIdAPI(id: number): Observable<Transport> {
    return this.httpClient.get<Transport>(`${API_URL8080}/${id}`);
  }

  public deleteTransportationAPI(id: number): Observable<Transport> {
    return this.httpClient.delete<Transport>(`${API_URL8080}/delete/${id}`);
  }

  public createTransportationAPI(transport: Transport): Observable<void> {
    return this.httpClient.post<void>(API_URL8080 + '/create', transport);
  }
  public updateTransportationAPI(id: number, transport: Transport): Observable<void> {
    return this.httpClient.patch<void>(`${API_URL8080}/update/${id}`, transport);
  }
  public getAllCityAPI(): Observable<City[]> {
    return this.httpClient.get<City[]>(API_URL8080 + '/cities');
  }
  //Todo đây là phần URL3000

  // public getAllCityAPI(): Observable<City[]> {
  //   return this.httpClient.get<City[]>(API_URL + '/cities');
  // }

}
