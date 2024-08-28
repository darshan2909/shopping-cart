import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  error(message: string) {
    return this._snackBar.open(message, undefined, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  success(message: string) {
    return this._snackBar.open(message, undefined, {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
