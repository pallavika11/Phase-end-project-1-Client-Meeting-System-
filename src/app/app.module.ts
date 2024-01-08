import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './products/productlist/productlist.component';
import { ProductformComponent } from './products/productform/productform.component';
import { ProducteditComponent } from './products/productedit/productedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './clients/addclient/addclient.component';
import {ClientFormComponent} from './clients/client-form/client-form.component';
import { UpdateClientComponent } from './clients/update-client/update-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductformComponent,
    ProducteditComponent,
    AddClientComponent,
    ClientFormComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// declarations: [
//   AppComponent,
//   ClientListComponent,
//   AddClientComponent,
//   UpdateClientComponent,
//   MeetingFormComponent,
//   AddMeetingComponent,
//   UpdateMeetingComponent,
//   ProducteditComponent,
//   ProductformComponent,
//   ProductlistComponent
// ],
// imports: [
//   BrowserModule,
//   AppRoutingModule,
//   ReactiveFormsModule,
//   HttpClientModule,
//   FormsModule,