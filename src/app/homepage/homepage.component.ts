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
      
      this.loginService.findbyUsernameAndPasswordForCustomer(formData.value.username,formData.value.password)
      .subscribe(response => {
        console.log(response);
      
        localStorage.setItem('cid',""+ response.cid);
        localStorage.setItem('username',response.userName);
        localStorage.setItem('password',response.password);
        localStorage.setItem('name',response.name);

        console.log(response.cid.toString());
        if(response!=null){
          this.router.navigateByUrl('customerdashboard');
          this.error="";
        }
        else this.error="Incorrect Email/Password";
      })
    }
   
  }




    
  


