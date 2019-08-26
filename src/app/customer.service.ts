import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banker } from './Banker';
import { Customer } from './Customer';
import { Accounts } from './CustomerAccounts';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private LIST_CUSTOMERS_URL ="http://localhost:8087/api/v1/customer/";

  accounts:any[]=[];
  constructor(private httpClient:HttpClient) { }


  listAccounts():Observable<Accounts[]>{
    return this.httpClient.get<Accounts[]>(this.LIST_CUSTOMERS_URL+ localStorage.getItem('cid') + "/accounts")   
  }
  findbyUsernameAndPasswordForCustomer(username,password):Observable<Customer>{
    return this.httpClient.get<Customer>(this.LIST_CUSTOMERS_URL+username+'/'+password);  
}

}
