import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from 'src/app/users/userlist/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent {

  id:number;
  meeting:Meeting;
  constructor(private service:ProductService,private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(){
     this.id= Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProductById(this.id).subscribe(ob=>this.meeting=ob);
  }
  onSubmit(){
    this.service.editProduct(this.meeting,this.id).subscribe((ob)=>alert("Meeting Details updated"));
    this.router.navigate(['productlist'])
  }
}