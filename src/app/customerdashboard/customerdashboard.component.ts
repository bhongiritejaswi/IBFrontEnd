import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {  Accounts } from '../CustomerAccounts';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

accounts:Accounts[]
  private subscription:Subscription;
  constructor(private router: Router,private listaccountsservice:CustomerService) { 
   
   
  }
  logout() {
localStorage.clear();
this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.subscription = this.listaccountsservice
    .listAccounts()
    .subscribe(response => {
      this.accounts = response;
    })
    
}
}