import { Injectable } from '@angular/core';
import { Accounts } from './CustomerAccounts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListAccountsService {

  private LIST_CUSTOMERS_URL ="http://localhost:8087/api/v1/customer/"+ localStorage.getItem('cid') + "/accounts";

  accounts:any[]=[];
  constructor(private httpClient:HttpClient) { }


  listAccounts():Observable<Accounts[]>{
    return this.httpClient.get<Accounts[]>(this.LIST_CUSTOMERS_URL)   
  }


}
