import { Component } from '@angular/core';
import { User } from '../userlist/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
user:User;

constructor(private service:UserService,private route:ActivatedRoute){}

ngOnInit(){
  const id=Number(this.route.snapshot.paramMap.get('id'));
  this.service.getUserById(id).subscribe(ob=>this.user=ob);
}
}
