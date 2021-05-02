import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import {Customer} from './Customer'
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
public baseUrl:string = "http://localhost:8080/onlinepizza"
  constructor(private http:HttpClient) { }
 
  getAllCustomers():Observable<Customer[]>{
     return  <Observable<Customer[]>>this.http.get(this.baseUrl + "/customers")
    
  }
 
  getCustomerById(id:number):Observable<Customer>{
    console.log("in service class")
    return <Observable<Customer>>this.http.get(this.baseUrl+"/customers/"+id);
 
  }
 
  deleteCustomerById(id:number):Observable<Customer>{
    console.log("in service class")
    return <Observable<Customer>>this.http.delete(this.baseUrl+"/customers/"+id);
 
  }
  updateCustomer(customer:Customer,id:number):Observable<Customer>{
    return <Observable<Customer>>this.http.put(this.baseUrl+"/customers/"+id,customer);
  }
 
  addCustomer(customer:Customer):Observable<Customer>{
    return <Observable<Customer>>this.http.post(this.baseUrl+"/customers",customer);
  }
}