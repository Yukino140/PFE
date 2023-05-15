import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url ='http://localhost:3001/crypto'
@Injectable({
  providedIn: 'root'
})
export class CoingateServiceService {

  constructor(private http:HttpClient) { }
  checkout(amount:number,currency:string){
    return this.http.post(url + '/checkout',{amount,currency})
  }

}
