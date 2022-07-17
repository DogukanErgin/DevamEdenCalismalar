import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit {

  cardForm!:FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  value='clear me';
showSpinner: boolean=false;






  constructor(
    private fb :FormBuilder , 
    private cardService:CardService,
    private _snackBar: MatSnackBar,
    private dialogRef:MatDialogRef<CardModalComponent>,
    private _snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data:Card
    ) {   }

  ngOnInit(): void {
    console.log(this.data);

  this.cardForm=this.fb.group({
    name:[this.data?.name||''],
    title:[this.data?.title||'',Validators.required],
    phone:[this.data?.phone||'',Validators.required],
    email:[this.data?.email||'',Validators.email],
    address:[this.data?.address||'',],
  });

  }
showcards(): void{
 console.log(this.cardForm.value); 

}
addCard():void{
  console.log(this.cardForm.value);
  this.showSpinner=true;
  this.cardService.addCard(this.cardForm.value).subscribe((res:any)=>
  {
this.getSucces(res|| 'Kartvizit başarıyla eklendi');
  },(err:any)=>{
    this.getError(err|| 'Bilinmeyen bir hata alındı');
      });
     
}

updateCard():void{
  this.showSpinner=true;
  this.cardService.updateCard(this.cardForm.value,this.data.id).subscribe((res:any)=>{
    this.getSucces(res|| 'Kartvizit başarıyla güncellendi');
  },(err:any)=>{
this.getError(err|| 'Bilinmeyen bir hata alındı');
  });
 
}

deleteCard():void{
  this.showSpinner=true;
  this.cardService.deleteCard(this.data.id).subscribe((res:any)=>{
 this.getSucces(res||'Kartvizit başarıyla silindi')
  },(err:any)=>{
    this.getError(err|| 'Bilinmeyen bir hata alındı');
      });
     
}
getSucces(message:any):void{
this._snackbarService.createSnackbar('success',message,3000);
  
this.cardService.getCards();
this.showSpinner=false;
this.dialogRef.close();
}
getError(message:any):void{
  this._snackbarService.createSnackbar('error',message,13000);
  this.showSpinner=false;
}

}

