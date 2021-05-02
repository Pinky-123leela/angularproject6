import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import {Coupan} from './Coupan'
@Injectable({
  providedIn: 'root'
})
export class CoupanService {
public baseUrl:string = "http://localhost:8080/onlinepizza"
  constructor(private http:HttpClient) { }
 
  getAllCoupans():Observable<Coupan[]>{
     return  <Observable<Coupan[]>>this.http.get(this.baseUrl + "/coupans")
    
  }
 
  getCoupanById(id:number):Observable<Coupan>{
    console.log("in service class")
    return <Observable<Coupan>>this.http.get(this.baseUrl+"/coupans/"+id);
 
  }
 
  deleteCoupanById(id:number):Observable<Coupan>{
    console.log("in service class")
    return <Observable<Coupan>>this.http.delete(this.baseUrl+"/coupans/"+id);
 
  }
  updateCoupan(coupan:Coupan,id:number):Observable<Coupan>{
    return <Observable<Coupan>>this.http.put(this.baseUrl+"/coupans/"+id,coupan);
  }
 
  addCoupan(coupan:Coupan):Observable<Coupan>{
    return <Observable<Coupan>>this.http.post(this.baseUrl+"/coupans",coupan);
  }
}