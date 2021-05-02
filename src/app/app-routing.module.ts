import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCoupanComponent } from './coupans/add-coupan.component';
import { CoupanListComponent } from './coupans/coupan-list.component';
import { CoupanComponent } from './coupans/coupan.component';
import { EditCoupanComponent } from './coupans/edit-coupan.component';
import { AddCustomerComponent } from './customers/add-customer.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerComponent } from './customers/customer.component';
import { EditCustomerComponent } from './customers/edit-customer.component';
 
const routes: Routes = [
  {path:'customers',component:CustomerListComponent},
  {path:'customers/:id',component:CustomerComponent},
  {path:'edit-customer/:id',component:EditCustomerComponent},
  {path:'add-customer',component:AddCustomerComponent},

  {path:'coupans',component:CoupanListComponent},
  {path:'coupans/:id',component:CoupanComponent},
  {path:'edit-coupan/:id',component:EditCoupanComponent},
  {path:'add-coupan',component:AddCoupanComponent}

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }