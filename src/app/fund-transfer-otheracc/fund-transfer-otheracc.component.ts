import { Component, OnInit } from '@angular/core';
import { ListAccountsService } from '../list-accounts.service';
import {  Accounts } from '../CustomerAccounts';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-fund-transfer-otheracc',
  templateUrl: './fund-transfer-otheracc.component.html',
  styleUrls: ['./fund-transfer-otheracc.component.css']
})
export class FundTransferOtheraccComponent implements OnInit {

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
