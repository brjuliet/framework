import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';
import { Albuns } from '../model/albuns';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  private readonly API = 'https://jsonplaceholder.typicode.com/albums'

  constructor(private httpClient: HttpClient) { }

  getListaAlbuns() {
    return this.httpClient.get<Albuns[]>(this.API)
    .pipe(
      take(1),
      delay(5000),
      tap(albuns => console.log(albuns))
    )
  }

  NovoAlbum(album) {
    return this.httpClient.post(this.API, album)
    .pipe(
      take(1),
      tap(album => console.log(album))
    )
  }

  PegarAlbumPeloId(albumId: number){
    return this.httpClient.get<any>(this.API + `/${albumId}`)
    .pipe(
      take(1),
      tap(album => console.log(album))
    )
  }

  AtualizarAlbum(albumId: number, post){
    return this.httpClient.put(this.API + `/${albumId}`, post)
    .pipe(
      take(1),
      tap(album => console.log(album))
    )
  }

  ExcluirAlbum(albumId: number){
    return this.httpClient.delete(this.API + `/${albumId}`)
    .pipe(
      take(1),
      tap(album => console.log(album))
    )
  }
}
