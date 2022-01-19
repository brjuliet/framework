import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-atualizar-post',
  templateUrl: './atualizar-post.component.html',
  styleUrls: ['./atualizar-post.component.scss']
})
export class AtualizarPostComponent implements OnInit {

  post: Observable<Post>;
  formulario: any;
  postId: number;


  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private postService: PostsService
    ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.id;

    this.postService.PegarPostPeloId(this.postId).subscribe(resp => {
      console.log()
      this.formulario = new FormGroup({
        userId: new FormControl(resp.id),
        title: new FormControl(resp.title),
        body: new FormControl(resp.body)
      })
    })
  }

  atualizarFormulario() {
    const post = this.formulario.value;
    this.postService.AtualizarPost(this.postId,post).subscribe(res => {
      this.router.navigate(['blog']);
    });
  }

  VoltarListagem() {
    this.router.navigate(['blog'])
  }

  get propriedade(){
    return this.formulario.controls;
  }

}
