import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {client} from '../users/userlist/models/client.models'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  addclient(data:client){
    return this.http.post<client>(" http://localhost:3000/posts",data)
  }

  getclient(){
    return this.http.get<client[]>("http://localhost:3000/posts")
  }

  deleteclient(id:number){
    return this.http.delete<client>("http://localhost:3000/posts/"+id)
  }

  fetchdata(id:number){
    return this.http.get<client>("http://localhost:3000/posts/"+id)
  }

  updateclient(data:client,id:number){
    return this.http.put<client>("http://localhost:3000/posts/"+id,data)
  }

}
