import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { toDos } from '../model/to-dos';
import { ToDosService } from '../services/to-dos.service';

@Component({
  selector: 'app-atualizar-to-dos',
  templateUrl: './atualizar-to-dos.component.html',
  styleUrls: ['./atualizar-to-dos.component.scss']
})
export class AtualizarToDosComponent implements OnInit {

  toDos: Observable<toDos>;
  formulario: any;
  postId: number;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private toDosService: ToDosService
  ) { }

  ngOnInit() {
    this.postId = this.route.snapshot.params.id;

    this.toDosService.PegarToDosPeloId(this.postId).subscribe(resp => {
      console.log(resp.completed);
      this.formulario = new FormGroup({
        userId: new FormControl(resp.id),
        title: new FormControl(resp.title),
        concluir: new FormControl(resp.completed)
      })
    })
  }

  atualizarFormulario() {
    const post = this.formulario.value;
    this.toDosService.AtualizarToDos(this.postId,post).subscribe(res => {
      this.router.navigate(['blog/to-dos']);
    });
  }

  VoltarListagem() {
    this.router.navigate(['blog/to-dos'])
  }

  get propriedade(){
    return this.formulario.controls;
  }


}
