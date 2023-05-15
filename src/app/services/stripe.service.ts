import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url ='http://localhost:3001/Stripe'

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http:HttpClient) { }

  makePayement(stripeToken:any):Observable<any>{
    return this.http.post<any>(url+'/checkout',stripeToken)
  }

}
