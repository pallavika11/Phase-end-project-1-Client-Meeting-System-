import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './clients/addclient/addclient.component';
import { ClientFormComponent } from './clients/client-form/client-form.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductformComponent } from './products/productform/productform.component';
import { ProducteditComponent } from './products/productedit/productedit.component';

const routes: Routes = [
  {path:'clientlist',component:ClientFormComponent},
  {path:'addclient',component:AddClientComponent},
  {path:'updateclient/:id',component:UpdateClientComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'productform',component:ProductformComponent},
  {path:'productlist/editproduct/:id',component:ProducteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }