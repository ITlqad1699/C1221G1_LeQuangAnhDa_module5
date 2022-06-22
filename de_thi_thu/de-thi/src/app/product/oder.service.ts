import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "./model/order";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Product} from "./model/product";
import {ProductType} from "./model/product-type";

const API_URL = `${environment.url3000}`;

@Injectable({
  providedIn: 'root'
})
export class OderService {

  constructor(private httpClient: HttpClient) {
  }

  public createOrderAPI(order: Order): Observable<void> {
    return this.httpClient.post<void>(API_URL + '/order', order);
  }

  public getAllOrderAPI(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(API_URL + '/order');
  }

  public fingByIdAPI(id: number): Observable<Order> {
    return this.httpClient.get<Order>(`${API_URL}/order/${id}`);
  }

  public updateOrderAPI(id: number, order: Order): Observable<void> {
    return this.httpClient.put<void>(`${API_URL}/order/${id}`, order);
  }

  public deleteOrderAPI(id: number): Observable<Order> {
    return this.httpClient.delete<Order>(`${API_URL}/order/${id}`);
  }

  public getAllProduct(){
    return this.httpClient.get<Product[]>(API_URL + '/product');
  }
  public getAllProductType(){
    return this.httpClient.get<ProductType[]>(API_URL + '/productType');
  }
}
