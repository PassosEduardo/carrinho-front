import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import User from 'src/app/models/user';
import UserService from 'src/app/shared/services/userService';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css']
})
export class CadastroUserComponent {

  hide = true;

  constructor(private form: FormBuilder, private userService:UserService){}

  registerForm = this.form.group({
    nome: '',
    email: '',
    senha:''
  })

  onSubmit(){
    
    const newUser = new User(
      this.registerForm.value.nome ?? '',
      this.registerForm.value.email ?? '', 
      this.registerForm.value.senha ?? '',
      ''
    )
    console.log(newUser.Email,newUser.Password)  
    this.userService.addUser(newUser).subscribe(
      (result) =>{console.log("estou aqui");} 
      );
    
  }

}
