import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToDosService } from '../services/to-dos.service';

@Component({
  selector: 'app-novo-to-dos',
  templateUrl: './novo-to-dos.component.html',
  styleUrls: ['./novo-to-dos.component.scss']
})
export class NovoToDosComponent implements OnInit {

  formulario: any;

  constructor(
    private toDosService: ToDosService,
    private router : Router
  ) {
    this.formulario = new FormGroup({
      userId: new FormControl(10),
      title: new FormControl(null),
      concluir: new FormControl(null)
    })
  }

  ngOnInit() {
  }

  enviarFormulario(): void {
    const toDos = this.formulario.value;

    this.toDosService.NovoToDos(toDos).subscribe(res => {
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
