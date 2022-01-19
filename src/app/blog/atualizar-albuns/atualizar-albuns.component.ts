import { Albuns } from './../model/albuns';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbunsService } from '../services/albuns.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-atualizar-albuns',
  templateUrl: './atualizar-albuns.component.html',
  styleUrls: ['./atualizar-albuns.component.scss']
})
export class AtualizarAlbunsComponent implements OnInit {

  post: Observable<Albuns>;
  formulario: any;
  albunsId: number;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private albunsService: AlbunsService
  ) { }

  ngOnInit() {
    this.albunsId = this.route.snapshot.params.id;

    this.albunsService.PegarAlbumPeloId(this.albunsId).subscribe(resp => {
      console.log()
      this.formulario = new FormGroup({
        userId: new FormControl(resp.id),
        title: new FormControl(resp.title),
        body: new FormControl(resp.body)
      })
    })
  }

  atualizarFormulario() {
    const album = this.formulario.value;
    this.albunsService.AtualizarAlbum(this.albunsId,album).subscribe(res => {
      this.router.navigate(['blog/albuns']);
    });
  }

  VoltarListagem() {
    this.router.navigate(['blog/albuns'])
  }

  get propriedade(){
    return this.formulario.controls;
  }

}
