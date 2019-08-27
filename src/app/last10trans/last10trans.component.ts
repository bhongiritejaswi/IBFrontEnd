import { Component, OnInit } from '@angular/core';
import { Transactions } from '../Transactions';
import {TransacdetailsService} from '../transacdetails.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-last10trans',
  templateUrl: './last10trans.component.html',
  styleUrls: ['./last10trans.component.css']
})
export class Last10transComponent implements OnInit {

  last10trans:Transactions[]
  private subscription:Subscription;
  constructor(private last10transactionService:TransacdetailsService) { }

  ngOnInit() {

    this.subscription=this.last10transactionService.
                            listlast10trans().subscribe(response =>{
                              this.last10trans=response;
                            })
  }

}
