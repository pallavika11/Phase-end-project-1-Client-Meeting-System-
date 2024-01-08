import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../users/userlist/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL:string='https://jsonplaceholder.typicode.com/users';
  //Dependency Injected fo API calls in constructor
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.baseURL);
  }
  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.baseURL+"/"+id);
  }
}