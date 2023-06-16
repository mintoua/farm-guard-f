import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
    private isAuthenticated = false;
    private currentUser: User | null = null;

    constructor() {}

    login(username: string, password: string): boolean {
        // Effectuez ici la vérification des informations d'identification avec votre API ou votre logique personnalisée
        // Si les informations d'identification sont valides, définissez isAuthenticated sur true et retournez true
        // Sinon, retournez false
    
        // Exemple de vérification basique
        const user: User | undefined = this.getUserByUsername(username);
    
        if (user && user.password === password) {
          this.isAuthenticated = true;
          this.currentUser = user;
          return true;
        }
    
        return false;
      }

      logout(): void {
        // Effectuez ici les opérations de déconnexion nécessaires, telles que la suppression du jeton d'authentification
        // Réinitialisez également la variable isAuthenticated et currentUser
        this.isAuthenticated = false;
        this.currentUser = null;
      }

      getIsAuthenticated(): boolean {
        return this.isAuthenticated;
      }
    
      getCurrentUser(): User | null {
        return this.currentUser;
      }

      private getUserByUsername(username: string): User | undefined {
        // Effectuez ici la recherche de l'utilisateur par son nom d'utilisateur
        // Utilisez une requête à votre API ou accédez à une source de données appropriée
        // Retournez l'utilisateur correspondant ou undefined si l'utilisateur n'existe pas
    
        // Exemple basique avec un tableau statique d'utilisateurs
        const users: User[] = [
          { id: 1, username: 'admin', email: 'admin@example.com', password: 'password', active: true },
          { id: 2, username: 'user', email: 'user@example.com', password: 'password', active: true },
        ];
    
        return users.find(user => user.username === username);
      }
    
}