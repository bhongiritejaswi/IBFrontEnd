import { Component, OnInit } from '@angular/core';
import { ListAccountsService } from '../list-accounts.service';
import {  Accounts } from '../CustomerAccounts';
import {Subscription} from 'rxjs';
import { map , filter} from 'rxjs/operators';


@Component({
  selector: 'app-fund-transfer-sameacc',
  templateUrl: './fund-transfer-sameacc.component.html',
  styleUrls: ['./fund-transfer-sameacc.component.css']
})
export class FundTransferSameaccComponent implements OnInit {

  accounts:Accounts[];
  dropDownAccounts:Accounts[];
  private subscription:Subscription;
  from;
  constructor(private listaccountsservice:ListAccountsService) { }

  ngOnInit() {
    
    this.subscription = this.listaccountsservice
                              .listAccounts()
                              .subscribe(response => {
                                this.accounts = response;
                              })
    this.dropDownAccounts=this.accounts;

  }

  fromSelected(from){

    this.dropDownAccounts=this.accounts;
    this.dropDownAccounts = this.dropDownAccounts.filter(function(res){
       if (res.acnumber != from ){
        // console.log("Hii");
         return res;
       }
    });
    console.log(this.dropDownAccounts);
  }
  
  
}
