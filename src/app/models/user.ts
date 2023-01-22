export default class User {
    Name: string = '';
    Email: string = '';
    Password: string = '';
    _id: string = '';
  
    constructor(nome: string, email: string, senha: string, id: string) {
      this.Name = nome;
      this.Email = email;
      this.Password = senha;
      this._id = id;
    }
  }