import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../users/userlist/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL:string= "http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Meeting[]>{
    return this.http.get<Meeting[]>(this.baseURL);
  }
  getProductById(id:number):Observable<Meeting>{
    return this.http.get<Meeting>(this.baseURL+"/"+id)
  }
  addProduct(product:Meeting){
    //console.log(product);
    return this.http.post(this.baseURL,product);
    //POst API call for creating new Record
  }
  editProduct(product:Meeting,id:number){
    return this.http.put(this.baseURL+"/"+id,product)
    //update the perticular Id with Given Product Object
  }
  deleteById(id:number){
    return this.http.delete(this.baseURL+"/"+id);
  }
}