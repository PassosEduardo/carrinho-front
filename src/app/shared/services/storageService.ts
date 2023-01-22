import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

    public storage: Storage;

  constructor() { 

    this.storage = window.sessionStorage
  }

  loginHanlder( emailValue: any, roleValue: string){
    this.storage.setItem("Email",JSON.stringify(emailValue));
    this.storage.setItem("Role",JSON.stringify(roleValue));
  }

  getMail() :string {
    return JSON.parse(this.storage.getItem("Email") || '{}'); 
  }

}