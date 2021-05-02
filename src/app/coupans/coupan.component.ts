import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupan } from './Coupan';
import { CoupanService } from './coupanService';
 
@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.css']
})
export class CoupanComponent implements OnInit {
coupan!:Coupan;
sub!:any;
id:number=0
  constructor(private _ActivatedRoute:ActivatedRoute,private _router:Router,private _service:CoupanService) { }
 
  ngOnInit(): void {
    this.id = Number(this._ActivatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id+" " +this._ActivatedRoute)
    this._service.getCoupanById(this.id).subscribe(
      (data)=>{console.log(data);this.coupan=data},
      (err)=>console.log(err)
    );
    }
      onBack():void{
        this._router.navigate(['coupans'])
      }
 
  }