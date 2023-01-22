import { SharedModule } from './../shared/shared.module';
import { FilterPipe } from './../shared/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { MaterialModule } from './../material/material.module';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    LoginComponent,
    CadastroUserComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    CadastroUserComponent
  ]
})
export class PagesModule { }
