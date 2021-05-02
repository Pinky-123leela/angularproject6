import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customerService';
import { Customer } from './Customer'
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
public customers!:Customer[] 
 
private error! : string
private id:number=0;
constructor(private service:CustomerService,private router:Router) { }
 
  ngOnInit(): void {
     this.service.getAllCustomers().subscribe(
      (data)=>this.customers = data,
      (err)=>this.error = err
 
    )  
 
  }
  onEdit(customer:Customer){this.router.navigate(['edit-customer',customer.id])}
  
  onDelete(customer:Customer):void{
     this.service.deleteCustomerById(customer.id)
        .subscribe( data => {
          console.log("user deleted")
               this.customers = this.customers.filter(u => u !== customer);
              })
          };
  
          
  addCustomer(){
    this.router.navigate(['add-customer'])
 
  }
        
      
    
  
}