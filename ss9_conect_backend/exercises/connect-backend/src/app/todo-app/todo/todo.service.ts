import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import {Todo} from './model/todo';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + '/todo');
  }

  saveTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(API_URL + '/todo', todo);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/todo/${id}`);
  }

  updateTodo(id: number, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/todo/${id}`, todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/todo/${id}`);
  }
}
