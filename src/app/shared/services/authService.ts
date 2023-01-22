import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authService {

  token = localStorage.getItem('token') ?? '';
  
  constructor(private router: Router, private http: HttpClient) { }

  buildHeaders = () =>
    new HttpHeaders().set('X-token', localStorage.getItem('token') ?? '');

validaLogin = (token: string) =>
  this.http.post(
    'http://localhost:5000/valida',
    { token },
    {
      headers: this.buildHeaders(),
      observe: 'response',
    }
  );
  
  canActivate(route: ActivatedRouteSnapshot) {
    // Escrevemos uma função que retorne verdadeiro ou falso.
    // Retornando verdadeiro, a rota pode ser acessada.
    // Retornando falso, não.

    if (!this.token) {
      this.router.navigate(['/login']);
    }

    // this.validaLogin(this.token).subscribe((retorno) => {
    //   console.log('validado!');
    // });
  }

  login = (email: string, Password: string) => 
    this.http.post('https://localhost:7289/Home', { email, Password });

  persistToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

}
