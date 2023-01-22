import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/shared/services/authService';
import { StorageService } from 'src/app/shared/services/storageService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 hide = true
  
 hasError: boolean = false;


 constructor(
  private formBuilder: FormBuilder,
  private authService: authService,
  private route: Router,
  private storageService : StorageService
) {}


loginForm = this.formBuilder.group({
  email:"",
  Password:""
})

onSubmit() {
  this.authService.login(
    this.loginForm.value.email ?? '',
    this.loginForm.value.Password ?? ''
  ).subscribe({
    next: (retorno) => {
      console.log((retorno as any).email)
      this.authService.persistToken((retorno as any).token);
      this.storageService.loginHanlder((retorno as any).email,(retorno as any).role)
      this.route.navigate(["/home"]);
    },
    error: (error) => {
      console.log(error);
      this.hasError = true;
    }
  } 
  )
}
}
