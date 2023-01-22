import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastroUserComponent } from './pages/cadastro-user/cadastro-user.component';
import { LoginComponent } from './pages/login/login.component';
import { authService } from './shared/services/authService';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: CadastroUserComponent},
  {path: 'home', component: HomeComponent, canActivate: [authService]},
  {path: 'cart', component: CartComponent},
  {path: '', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
