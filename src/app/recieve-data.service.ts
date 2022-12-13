import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RecieveDataService{

  datos: any = [];
  constructor(private httpClient: HttpClient){}


  getData(): Observable<any>{
    return this.httpClient.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20");
  }


}
