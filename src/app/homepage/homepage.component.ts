import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {

  response;
  userdetails;
  error="";
  abc;
  constructor(private loginService:CustomerService,private router: Router) { } 
  ngOnInit() {
  }
  
    custlogin(formData){  
      console.log(formData);
      this.loginService.findbyUsernameAndPasswordForCustomer(formData.value.username,formData.value.password)
      .subscribe(response => {
        console.log(response);
        if(response!=null){
          
          localStorage.setItem('cid',response.cid.toString());
        localStorage.setItem('username',response.userName);
        localStorage.setItem('name',response.name);
        localStorage.setItem('pan',response.pan);
        localStorage.setItem('phoneNo',response.phoneNo);
        
          this.router.navigateByUrl('customerdashboard/cust-profile');
          this.error="";
        }
        else this.error="Incorrect Email/Password";
      })
    }

    emplogin(formData){  
      console.log(formData);
      this.loginService.findbyUsernameAndPasswordForCustomer(formData.value.username,formData.value.password)
      .subscribe(response => {
        console.log(response);
        if(response!=null){
          
          localStorage.setItem('cid',response.cid.toString());
        localStorage.setItem('username',response.userName);
        localStorage.setItem('name',response.name);
        localStorage.setItem('pan',response.pan);
        localStorage.setItem('phoneNo',response.phoneNo);
        
          this.router.navigateByUrl('customerdashboard/cust-profile');
          this.error="";
        }
        else this.error="Incorrect Email/Password";
      })
    }
   
  }




    
  


