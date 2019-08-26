import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
username
name
  constructor(private customerService:CustomerService,private router: Router) { 
   this.name=localStorage.getItem('name');
   console.log(this.name);
   
  }
  logout() {
localStorage.clear();
this.router.navigateByUrl('');
  }

  ngOnInit() {
    }
}