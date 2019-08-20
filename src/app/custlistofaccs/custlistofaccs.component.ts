import { Component, OnInit } from '@angular/core';
import { CustAcclistServiceService } from '../cust-acclist-service.service';
import { CustomerAccounts } from '../CustomerAccounts';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-custlistofaccs',
  templateUrl: './custlistofaccs.component.html',
  styleUrls: ['./custlistofaccs.component.css']
})
export class CustlistofaccsComponent implements OnInit {

  accounts:CustomerAccounts[];
  currentUser:CustomerAccounts;
  private subscription:Subscription;
  private currentAccSubscription:Subscription;
  constructor(private custAcclistService:CustAcclistServiceService) { }

  ngOnInit() {
    this.custAcclistService.listAccounts().subscribe(response=>{
      this.accounts=response;
    })
  }

}
