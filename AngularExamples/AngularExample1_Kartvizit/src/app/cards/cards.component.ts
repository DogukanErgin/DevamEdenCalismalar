import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModalComponent } from './card-modal/card-modal.component';
import {MatButtonModule} from '@angular/material/button';
import { Card } from '../models/card';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {


 cards !: Card[];

  constructor(
    public dialog: MatDialog,
    private cardservice: CardService
    ) {}

  ngOnInit(): void {
  }

  openAddCardModal(){
    this.dialog.open(CardModalComponent,{
width:'400px'
    });
  }
  getCards(){
 this.cardservice.getCards().subscribe((res:Card[])=>{
  this.cards=res;
 });
    }
  }

