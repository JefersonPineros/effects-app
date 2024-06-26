import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users?per_page=6&delay=3000`).pipe(
      map((resp: any) => {
        return resp.data;
      })
    );
  }

  getUsersById(id: string): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`).pipe(
      map((resp: any) => {
        return resp.data;
      })
    );
  }
}
