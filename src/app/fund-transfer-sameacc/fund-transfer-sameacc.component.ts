import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {  Accounts } from '../CustomerAccounts';
import {Subscription} from 'rxjs';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-fund-transfer-sameacc',
  templateUrl: './fund-transfer-sameacc.component.html',
  styleUrls: ['./fund-transfer-sameacc.component.css']
})
export class FundTransferSameaccComponent implements OnInit {

  accounts:Accounts[]
  dropDownAccounts:Accounts[]
  private subscription:Subscription;

  constructor(private listaccountsservice:CustomerService,private transactionservice:TransactionService,private router: Router) { }

  ngOnInit() {
    
    this.subscription = this.listaccountsservice
                              .listAccounts()
                              .subscribe(response => {
                                this.accounts = response;
                              })

  }
  
  makeTransaction(formData)
  {
    //console.log(formData.value);
    this.transactionservice.savetransaction(formData.value).subscribe(Response=>{
    console.log(Response);
    
  })
  
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
