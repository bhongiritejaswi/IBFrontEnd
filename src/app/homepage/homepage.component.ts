import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { BankerService } from '../banker.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit  {

  response;
  res;
  userdetails;
  error="";
  error2="";
  abc;
  constructor(private loginService:CustomerService,
    private router: Router,
    private bankerService:BankerService) { } 
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
      formData.reset();
    }

    emplogin(formData2){  
      console.log(formData2);

      this.bankerService.findbyUsernameAndPasswordForBank(formData2.value.username,formData2.value.password)
      .subscribe(res => {
        console.log(res);
        if(res!=null){
          this.router.navigateByUrl('banker');
          this.error2="";
        }
        else this.error2="Incorrect Email/Password";
      })
      formData2.reset();
    }
   
  }




    
  


