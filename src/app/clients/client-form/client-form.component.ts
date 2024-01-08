import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { client } from 'src/app/users/userlist/models/client.models'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  data: undefined | client[]
  constructor(private service: ServiceService) { }
  ngOnInit(): void {
    this.getclient();

  }
  getclient() {
    this.service.getclient().subscribe(res => {
      this.data = res;
    })
  }

  delete(item:any){
    this.service.deleteclient(item.id).subscribe(res=>{
      alert("deleted successfully !!")
      this.getclient()
    })
  }

  }




