import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlbunsService } from '../services/albuns.service';

@Component({
  selector: 'app-novo-albuns',
  templateUrl: './novo-albuns.component.html',
  styleUrls: ['./novo-albuns.component.scss']
})
export class NovoAlbunsComponent implements OnInit {

  formulario: any;

  constructor(
    private albunsService: AlbunsService,
    private router : Router
  ) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      userId: new FormControl(10),
      title: new FormControl(null)
    })
  }

  enviarFormulario(): void {
    const post = this.formulario.value;

    this.albunsService.NovoAlbum(post).subscribe(res => {
      this.router.navigate(['blog/albuns']);
    });

  }

  VoltarListagem() {
    this.router.navigate(['blog/albuns'])
  }


  get propriedade () {
    return this.formulario.controls;
  }


}
