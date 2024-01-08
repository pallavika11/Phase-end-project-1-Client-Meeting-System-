import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { client } from 'src/app/users/userlist/models/client.models';
import { NgIfContext } from '@angular/common';


@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddClientComponent implements OnInit {
  clientform: FormGroup | any;
  constructor(private formbuilder: FormBuilder,private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.clientform = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      phonenumber: ['', Validators.required],
      address: ['', Validators.required],
      password: ['',[Validators.required,Validators.minLength(8)]],
      repeatpassword: ['',Validators.required],
    },{
      validator:this.passwordMatchValidator
    });
  }

  get phonenumber(){
    return this.clientform.get('phonenumber')
  }
  get email(){
    return this.clientform.get('email')
  }
  get firstname(){
    return this.clientform.get('firstname')
  }
  get lastname(){
    return this.clientform.get('lastname')
  }
  get address(){
    return this.clientform.get('address')
  }
  
  

  passwordMatchValidator(group:FormGroup){
    const passwordcontrol=group.get('password')
    const repeatpasswordcontrol=group.get('repeatpassword')
    if(!passwordcontrol || !repeatpasswordcontrol){
      return null;
    }
    return passwordcontrol.value===repeatpasswordcontrol.value? null:{mismatch:true};
  }


  Registerclient(data:client) {
    //console.log(this.clientform.value)
    this.service.addclient(data).subscribe((res=>{
      this.clientform.reset();
      this.router.navigate(["/clientlist"])
    }))
   
  }

}
