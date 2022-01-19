import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-novo-post',
  templateUrl: './novo-post.component.html',
  styleUrls: ['./novo-post.component.scss']
})
export class NovoPostComponent implements OnInit {

  formulario: any;

  constructor(
    private postService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      userId: new FormControl(10),
      title: new FormControl(null),
      body: new FormControl(null)
    })
  }


  enviarFormulario(): void {
    const post = this.formulario.value;

    this.postService.NovoPost(post).subscribe(res => {
      this.router.navigate(['blog/to-dos']);
    });

  }

  VoltarListagem() {
    this.router.navigate(['blog/to-dos'])
  }


  get propriedade () {
    return this.formulario.controls;
  }

}
