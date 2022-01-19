import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Albuns } from '../model/albuns';
import { AlbunsService } from '../services/albuns.service';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.scss']
})
export class AlbunsComponent implements OnInit {

  albuns$: Observable<Albuns[]>;
  displayedColumns = ["id", "title", "userId", "acoes"];

  constructor(
    private albunsService: AlbunsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.albuns$ = this.albunsService.getListaAlbuns().pipe(
      catchError((error) => {
        this.onError("Erro ao carregar posts.");
        return of([]);
      })
    );
  }

  confirmarAcao(e) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: "Tem certeza que deseja deletar este Post",
        buttonText: {
          ok: "Sim",
          cancel: "Não",
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.albunsService.ExcluirAlbum(e).subscribe((success) => this.listar());

        this.snackBar.open("Deletado com sucesso!", "Fechar", {
          duration: 2000,
        });
      }
    });
  }
}


