import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbar:MatSnackBar) { }



  createSnackbar(type:string, message:string,duration:number=4000){
    this._snackbar.open(message,'',{
      duration,
      panelClass:type
      
    });
  }
}
