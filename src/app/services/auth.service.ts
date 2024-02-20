import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated: boolean = false;
  private isAdmin: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password:string): void {
    //envoyer une requête HTTP au backend pour authentifier l'user
    this.http.post<any>('backend/login', {username, password}).subscribe(
      response => {
        // si réussi
        this.isAuthenticated = true;
        // vérifier si l'user est un admin en fonction de la rep backend
        this.isAdmin = response.isAdmin;
      },
      error => {
        console.error('Erreur lors de l\'authentification:',error);
      }
    );

  }

  logout(): void {
    //reinitialiser les info de connexion lors de la deconnexion
    this.isAuthenticated = false;
    this.isAdmin = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
}
