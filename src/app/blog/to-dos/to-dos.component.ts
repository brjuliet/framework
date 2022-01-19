import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { toDos } from '../model/to-dos';
import { ToDosService } from '../services/to-dos.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  toDos$: Observable<toDos[]>;
  displayedColumns = ["id", "title", "completed", "userId", "acoes"];

  constructor(
    private toDosService: ToDosService,
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
    this.toDos$ = this.toDosService.getListaToDos().pipe(
      catchError((error) => {
        this.onError("Erro ao carregar ToDos.");
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
        this.toDosService.ExcluirToDos(e).subscribe((success) => this.listar());

        this.snackBar.open("Deletado com sucesso!", "Fechar", {
          duration: 2000,
        });
      }
    });
  }

}
