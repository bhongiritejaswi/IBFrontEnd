import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {  Accounts } from '../CustomerAccounts';
import {Subscription} from 'rxjs';
import { TransacdetailsService } from '../transacdetails.service';
import { Transactions } from '../Transactions';

@Component({
  selector: 'app-custtranshistory',
  templateUrl: './custtranshistory.component.html',
  styleUrls: ['./custtranshistory.component.css']
})
export class CusttranshistoryComponent implements OnInit {

  last10trans:Transactions[];
  accounts:Accounts[];
  anum:number;
  private subscription:Subscription;

  constructor(private listaccountsservice:CustomerService,private transactionservice:TransacdetailsService) { }

  ngOnInit() {
    
    this.subscription = this.listaccountsservice
                              .listAccounts()
                              .subscribe(response => {
                                this.accounts = response;
                              })

  }
  getAccNum(acnum){
    console.log("Display clicked",acnum);
    this.anum = acnum;
    
  }
  getTransactions(acnum){
   // this.anum=0;
    console.log("After making 0==",this.anum); 
    this.anum=acnum;
    console.log("First Time and Second Time anum=",acnum);
    this.subscription=this.transactionservice.listlast10trans(this.anum).subscribe(res=>{
      this.last10trans=res});

  }

}
