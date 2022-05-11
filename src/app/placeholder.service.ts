import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceholderService {
  constructor(private http: HttpClient) {}

  getUsers = (): Observable<IUser[]> => {
    return this.http.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users?_page=1&_limit=5'
    );
  };

  getTodos = (): Observable<any[]> => {
    return this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5'
    );
  };

  getPosts = (): Observable<any[]> => {
    return this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5&_expand=user'
    );
  };

  getPost = (id: number): Observable<any[]> => {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}?_page=1&_limit=5&_expand=user`
    );
  };
}
