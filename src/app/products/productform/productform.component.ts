import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from 'src/app/users/userlist/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent {
  meeting:Meeting ={id:1,meetingtopic:'',
  noofpeople:0,starttime:''};

  constructor(private http:ProductService,private router:Router){}
  onSubmit(){
    console.log(this.meeting);
    this.http.addProduct(this.meeting)
    .subscribe(resp=>console.log(resp));
    alert("Meeting Details Added");
    this.router.navigate(['productlist'])
  }
}