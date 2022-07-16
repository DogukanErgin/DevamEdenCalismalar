import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
// apiUrl:string='http://demo.limantech.com/cards/public/api';
  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private htpp:HttpClient 
    ) { }

  getCards(): Observable<Card[]>{
    return this.htpp.get<Card[]>(this.apiUrl+'/cards');
  }
}

