import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './Customer';
import { CustomerService } from './customerService';
 
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customer!:Customer;
sub!:any;
id:number=0
  constructor(private _ActivatedRoute:ActivatedRoute,private _router:Router,private _service:CustomerService) { }
 
  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this._service.getCustomerById(this.id).subscribe(
      (data)=>{console.log(data);this.customer=data},
      (err)=>console.log(err)
    );
    }
      onBack():void{
        this._router.navigate(['customers'])
      }
 
  }