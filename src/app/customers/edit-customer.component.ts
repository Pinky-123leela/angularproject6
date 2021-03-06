import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "./Customer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {CustomerService } from "./customerService";
 
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
customer!:Customer;
editForm!:FormGroup;
id:number=0;
 
constructor(private _ActivatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private service: CustomerService) { }
 
ngOnInit() {
 
  this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this.service.getCustomerById(this.id).subscribe(
      (data)=>{console.log(data);this.customer=data;
        this.editForm = this.formBuilder.group({
          id: this.customer.id,
          name: this.customer.name,
          password: this.customer.password,
          role:this.customer.role,
          mobileNumber:this.customer.mobileNumber
          
        });},
      (err)=>console.log(err)
    );
    
         
      
    }
  onSubmit() {
    console.log(this.editForm.value +"from onSubmit of edit customer component")
    this.service.updateCustomer(this.editForm.value,this.editForm.value.id)
      .pipe(first())
      .subscribe(
        data => {this.customer =data;this.router.navigate(['customers'])},
        (err)=>{console.log(err)}
         
      )}}