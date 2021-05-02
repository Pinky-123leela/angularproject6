import { Component, OnInit } from '@angular/core';
import { CoupanService } from './coupanService';
import { Coupan } from './Coupan'
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-coupan-list',
  templateUrl: './coupan-list.component.html',
  styleUrls: ['./coupan-list.component.css']
})
export class CoupanListComponent implements OnInit {
  public coupans!:Coupan[] 
 
  private error! : string
  private id:number=0;
  constructor(private service:CoupanService,private router:Router) { }
   
    ngOnInit(): void {
       this.service.getAllCoupans().subscribe(
        (data)=>this.coupans = data,
        (err)=>this.error = err
   
      )  
   
    }
    onEdit(coupan:Coupan){this.router.navigate(['edit-coupan',coupan.id])}
    
    onDelete(coupan:Coupan):void{
       this.service.deleteCoupanById(coupan.id)
          .subscribe( data => {
            console.log("coupan deleted")
                 this.coupans = this.coupans.filter(u => u !== coupan);
                })
            };
    
            
    addCoupan(){
      this.router.navigate(['add-coupan'])
   
    }
          
        
      
    
  }
  
