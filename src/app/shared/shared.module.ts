import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [ErrorDialogComponent, ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ErrorDialogComponent, ConfirmDialogComponent],
  entryComponents: [ErrorDialogComponent, ConfirmDialogComponent]

})
export class SharedModule { }
