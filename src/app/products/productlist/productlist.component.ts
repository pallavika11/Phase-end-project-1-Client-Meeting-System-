import { Component } from '@angular/core';
import { Meeting } from 'src/app/users/userlist/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {

  meetings:Meeting[];
  constructor(private service:ProductService){}
  ngOnInit(){
    this.service.getAllProducts().subscribe(ob=>this.meetings=ob);
  }
  
  delete(id:number){
    //api to delete from backedn
    this.service.deleteById(id).subscribe(()=>alert("Meeting Details Deleted"));
    this.meetings= this.meetings.filter((item)=>item.id!==id);
    //refresh products array to show a quick changes
  }
}