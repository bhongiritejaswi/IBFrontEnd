import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerAccounts} from './CustomerAccounts';
@Injectable({
  providedIn: 'root'
})
export class CustAcclistServiceService {

  private CUST_API_URL="https://jsonplaceholder.typicode.com/users";
  custs:any[]=[];
  constructor(private httpClient:HttpClient) { }

  listAccounts():Observable<CustomerAccounts[]>{
    return this.httpClient.get<CustomerAccounts[]>(this.CUST_API_URL);
  }
}
