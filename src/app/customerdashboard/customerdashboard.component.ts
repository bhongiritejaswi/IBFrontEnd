import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
name
  constructor() { 
   this.name=localStorage.getItem('username');
   console.log(this.name);
  }

  ngOnInit() {
  }

}