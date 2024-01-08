import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { client } from 'src/app/users/userlist/models/client.models';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit{
  public clientid!:number;
  public clientdata:client={} as client;
  constructor(private service:ServiceService,private activatedroute:ActivatedRoute,private route:Router){}
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param:Params)=>{
      this.clientid=param['id']
    })
    this.service.fetchdata(this.clientid).subscribe((data:client)=>{
      this.clientdata=data;
      console.log(data);
    })
  }

  update(){
    this.service.updateclient(this.clientdata,this.clientid).subscribe((res:client)=>{
      alert("Updated successfully !!!")
      this.route.navigate(['/clientlist'])
    })
  }

}
