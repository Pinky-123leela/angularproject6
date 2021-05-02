import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customers/customer-list.component';
import { CustomerComponent } from './customers/customer.component';
import { AddCustomerComponent } from './customers/add-customer.component';
import { EditCustomerComponent } from './customers/edit-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoupanListComponent } from './coupans/coupan-list.component';
import { CoupanComponent } from './coupans/coupan.component';
import { AddCoupanComponent } from './coupans/add-coupan.component';
import { EditCoupanComponent } from './coupans/edit-coupan.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CoupanListComponent,
    CoupanComponent,
    AddCoupanComponent,
    EditCoupanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}