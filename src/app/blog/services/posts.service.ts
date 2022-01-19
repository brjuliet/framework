import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs/operators';

import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

private readonly API = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }

  getListaPosts() {
    return this.httpClient.get<Post[]>(this.API)
    .pipe(
      take(1),
      delay(5000),
      tap(posts => console.log(posts))
    )
  }

  NovoPost(post) {
    return this.httpClient.post(this.API, post)
    .pipe(
      take(1),
      tap(posts => console.log(posts))
    )
  }

  PegarPostPeloId(postId: number){
    return this.httpClient.get<any>(this.API + `/${postId}`)
    .pipe(
      take(1),
      tap(posts => console.log(posts))
    )
  }

  AtualizarPost(postId: number, post){
    return this.httpClient.put(this.API + `/${postId}`, post)
    .pipe(
      take(1),
      tap(posts => console.log(posts))
    )
  }

  ExcluirPost(postId: number){
    return this.httpClient.delete(this.API + `/${postId}`)
    .pipe(
      take(1),
      tap(posts => console.log(posts))
    )
  }
}

