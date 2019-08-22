import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { CustlistofaccsComponent } from './custlistofaccs/custlistofaccs.component';
import { CustfundtransferComponent } from './custfundtransfer/custfundtransfer.component';
import { CusttranshistoryComponent } from './custtranshistory/custtranshistory.component';
import { FundTransferSameaccComponent } from './fund-transfer-sameacc/fund-transfer-sameacc.component';
import { FundTransferOtheraccComponent } from './fund-transfer-otheracc/fund-transfer-otheracc.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerloginComponent,
    EmployeeloginComponent,
    CustomerdashboardComponent,
    CustlistofaccsComponent,
    CustfundtransferComponent,
    CusttranshistoryComponent,
    FundTransferSameaccComponent,
    FundTransferOtheraccComponent,
    HomepageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomepageComponent
      },
       {
         path:'homepage',
        component:CustomerloginComponent,
       },
          {
            path:'customerdashboard',
            component:CustomerdashboardComponent,
          },
              {
                path:'custfundtransfer',
                component:CustfundtransferComponent,
              },
                  {
                    path:'fund-transfer-sameacc',
                    component:FundTransferSameaccComponent
                  },
                  {
                    path:'fund-transfer-otheracc',
                    component:FundTransferOtheraccComponent
                  },
                 
              {
                path:'custlistofaccs',
                component:CustlistofaccsComponent
              },
              {
                path:'custtranshistory',
                component:CusttranshistoryComponent
              },
            
          
      
      {
        path:'employeelogin',
        component:EmployeeloginComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  
}