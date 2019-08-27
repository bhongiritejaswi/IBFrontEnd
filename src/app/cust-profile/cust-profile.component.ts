import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.component.html',
  styleUrls: ['./cust-profile.component.css']
})
export class CustProfileComponent implements OnInit {
  pan
  phoneNo
name
username
  constructor() { 
    this.pan=localStorage.getItem('pan');
    this.phoneNo=localStorage.getItem('phoneNo');
    this.name=localStorage.getItem('name');
    this.username=localStorage.getItem('username')
  }

  ngOnInit() {
  }

}
