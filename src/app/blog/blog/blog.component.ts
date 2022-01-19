import { ErrorDialogComponent } from "./../../shared/components/error-dialog/error-dialog.component";
import { Component, Inject, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Post } from "../model/post";
import { PostsService } from "../services/posts.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "src/app/shared/components/confirm-dialog/confirm-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  posts$: Observable<Post[]>;
  displayedColumns = ["id", "title", "body", "userId", "acoes"];

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.posts$ = this.postsService.getListaPosts().pipe(
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
        this.postsService.ExcluirPost(e).subscribe((success) => this.listar());

        this.snackBar.open("Deletado com sucesso!", "Fechar", {
          duration: 2000,
        });
      }
    });
  }
}
