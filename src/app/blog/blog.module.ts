import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from './../shared/shared.module';
import { AlbunsComponent } from './albuns/albuns.component';
import { AtualizarAlbunsComponent } from './atualizar-albuns/atualizar-albuns.component';
import { AtualizarPostComponent } from './atualizar-post/atualizar-post.component';
import { AtualizarToDosComponent } from './atualizar-to-dos/atualizar-to-dos.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { NovoAlbunsComponent } from './novo-albuns/novo-albuns.component';
import { NovoPostComponent } from './novo-post/novo-post.component';
import { NovoToDosComponent } from './novo-to-dos/novo-to-dos.component';
import { ToDosComponent } from './to-dos/to-dos.component';

@NgModule({
  declarations: [
    BlogComponent,
    NovoPostComponent,
    AtualizarPostComponent,
    AlbunsComponent,
    ToDosComponent,
    AtualizarAlbunsComponent,
    AtualizarToDosComponent,
    NovoAlbunsComponent,
    NovoToDosComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
})
export class BlogModule {}
