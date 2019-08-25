import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banker } from './Banker';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  private CUSTOMER_LOGIN_URL ="http://localhost:8087/api/v1/customer";


  constructor(private httpClient:HttpClient) { }

  

  findbyUsernameAndPasswordForCustomer(username,password):Observable<Customer>{
        return this.httpClient.get<Customer>(this.CUSTOMER_LOGIN_URL+'/'+username+'/'+password);  
  }
}
