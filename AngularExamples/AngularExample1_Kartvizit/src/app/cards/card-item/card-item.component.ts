import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() cardData!:Card; //başlangıçta bir değer istediği için ünlemsiz şekilde eklersek hata verir ünlem boş olabilir anlamına gelmekte
  constructor() { }

  ngOnInit(): void {
  }

}
