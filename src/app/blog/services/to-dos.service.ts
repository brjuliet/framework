import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';
import { toDos } from '../model/to-dos';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  private readonly API = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private httpClient: HttpClient) { }

  getListaToDos() {
    return this.httpClient.get<toDos[]>(this.API)
    .pipe(
      take(1),
      delay(5000),
      tap(toDos => console.log(toDos))
    )
  }

  NovoToDos(toDos) {
    return this.httpClient.post(this.API, toDos)
    .pipe(
      take(1),
      tap(toDos => console.log(toDos))
    )
  }

  PegarToDosPeloId(toDosId: number){
    return this.httpClient.get<any>(this.API + `/${toDosId}`)
    .pipe(
      take(1),
      tap(toDos => console.log(toDos))
    )
  }

  AtualizarToDos(toDosId: number, post){
    return this.httpClient.put(this.API + `/${toDosId}`, post)
    .pipe(
      take(1),
      tap(toDos => console.log(toDos))
    )
  }

  ExcluirToDos(toDosId: number){
    return this.httpClient.delete(this.API + `/${toDosId}`)
    .pipe(
      take(1),
      tap(toDos => console.log(toDos))
    )
  }

}
