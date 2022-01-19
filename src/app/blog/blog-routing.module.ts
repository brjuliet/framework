import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AtualizarPostComponent } from './atualizar-post/atualizar-post.component';
import { NovoPostComponent } from './novo-post/novo-post.component';
import { AlbunsComponent } from './albuns/albuns.component';
import { NovoAlbunsComponent } from './novo-albuns/novo-albuns.component';
import { AtualizarAlbunsComponent } from './atualizar-albuns/atualizar-albuns.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { NovoToDosComponent } from './novo-to-dos/novo-to-dos.component';
import { AtualizarToDosComponent } from './atualizar-to-dos/atualizar-to-dos.component';


const routes: Routes = [
  { path: '',  component: BlogComponent},
  { path: 'novo-post',  component: NovoPostComponent},
  { path: 'atualizar-post/:id',  component: AtualizarPostComponent},
  { path: 'albuns',  component: AlbunsComponent},
  { path: 'novo-albuns',  component: NovoAlbunsComponent},
  { path: 'atualizar-albuns/:id',  component: AtualizarAlbunsComponent},
  { path: 'to-dos',  component: ToDosComponent},
  { path: 'novo-to-dos',  component: NovoToDosComponent},
  { path: 'atualizar-to-dos/:id',  component: AtualizarToDosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
