import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Coupan} from "./Coupan";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {CoupanService } from "./coupanService";

@Component({
  selector: 'app-edit-coupan',
  templateUrl: './edit-coupan.component.html',
  styleUrls: ['./edit-coupan.component.css']
})
export class EditCoupanComponent implements OnInit {
  coupan!:Coupan;
editForm!:FormGroup;
id:number=0;
 
constructor(private _ActivatedRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router, private service: CoupanService) { }
 
ngOnInit() {
 
  this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this.service.getCoupanById(this.id).subscribe(
      (data)=>{console.log(data);this.coupan=data;
        this.editForm = this.formBuilder.group({
          id: this.coupan.id,
          name: this.coupan.name,
          type: this.coupan.type,
          description:this.coupan.description,
          priceDiscount:this.coupan.priceDiscount
          
        });},
      (err)=>console.log(err)
    );
    
         
      
    }
  onSubmit() {
    console.log(this.editForm.value +"from onSubmit of edit coupan component")
    this.service.updateCoupan(this.editForm.value,this.editForm.value.id)
      .pipe(first())
      .subscribe(
        data => {this.coupan =data;this.router.navigate(['coupans'])},
        (err)=>{console.log(err)}
         
      )}}

  