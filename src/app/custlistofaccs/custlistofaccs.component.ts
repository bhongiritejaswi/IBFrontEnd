import { Component, OnInit } from '@angular/core';
import { ListAccountsService } from '../list-accounts.service';
import {  Accounts } from '../CustomerAccounts';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custlistofaccs',
  templateUrl: './custlistofaccs.component.html',
  styleUrls: ['./custlistofaccs.component.css']
})
export class CustlistofaccsComponent implements OnInit {

  accounts:Accounts[]
  private subscription:Subscription;

  constructor(private listaccountsservice:ListAccountsService) { }

  ngOnInit() {
    
    this.subscription = this.listaccountsservice
                              .listAccounts()
                              .subscribe(response => {
                                this.accounts = response;
                              })

  }

   
}
