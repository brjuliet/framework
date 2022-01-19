import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private httpClient: HttpClient) { }

  getListaUsers() {
    return this.httpClient.get<users[]>(this.API)
    .pipe(
      take(1),
      tap(users => console.log(users))
    )
  }
}
