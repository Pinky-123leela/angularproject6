import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupan } from './Coupan';
import { CoupanService } from './coupanService';

@Component({
  selector: 'app-add-coupan',
  templateUrl: './add-coupan.component.html',
  styleUrls: ['./add-coupan.component.css']
})
export class AddCoupanComponent implements OnInit {
  coupan!:Coupan;
  addForm!:FormGroup;
  id:number=0;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private service: CoupanService) { }
  
  ngOnInit() {
  
       this.addForm = this.formBuilder.group({
           
            name:['',Validators.required],
            type:['',Validators.required],
            description:['',Validators.required],
            priceDiscount:['',Validators.required]
            
       })
      }
      onSubmit() {
        console.log(this.addForm.value +"from onSubmit of add coupan component")
        this.service.addCoupan(this.addForm.value).subscribe(
          data=>this.coupan=data,
          err=>console.log(err)
        )
      }}
  

  
