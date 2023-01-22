import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import User from "src/app/models/user";



@Injectable({
    providedIn: 'root',
  })

  export default class UserService{

    constructor(private httpClient : HttpClient){}

    addUser = (user: User) =>
      this.httpClient.post("https://localhost:7289/register",user)
  }