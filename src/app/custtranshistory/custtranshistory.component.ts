import { Component, OnInit } from '@angular/core';
import { ListAccountsService } from '../list-accounts.service';
import {  Accounts } from '../CustomerAccounts';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custtranshistory',
  templateUrl: './custtranshistory.component.html',
  styleUrls: ['./custtranshistory.component.css']
})
export class CusttranshistoryComponent implements OnInit {

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
