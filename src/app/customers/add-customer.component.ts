import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './Customer';
import { CustomerService } from './customerService';
 
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer!:Customer;
  addForm!:FormGroup;
  id:number=0;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private service: CustomerService) { }
  
  ngOnInit() {
  
       this.addForm = this.formBuilder.group({
           
            name:['',Validators.required],
            password:['',Validators.required],
            role:['',Validators.required],
            mobileNumber:['',Validators.required]
            
       })
        
      
           
        
      }
    onSubmit() {
      console.log(this.addForm.value +"from onSubmit of add customer component")
      this.service.addCustomer(this.addForm.value).subscribe(
        data=>this.customer=data,
        err=>console.log(err)
      )
    }}
