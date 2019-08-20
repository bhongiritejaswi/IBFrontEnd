import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IBFrontEnd';
  custstatus=false;
  empstatus=false;
  
  DisableCustLogin() {
    console.log("Customer Login Clicked....");
    this.empstatus=!this.empstatus;
    if(this.empstatus==true)
    {
      return this.empstatus;
    }
  }
}
