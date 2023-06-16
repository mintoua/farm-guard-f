import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './shared/service/auth.service'; // Importez votre service d'authentification ici

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.getIsAuthenticated(); // Utilisez votre service d'authentification pour vérifier l'état d'authentification
    if (!isAuthenticated) {
      this.router.navigate(['/signin']); // Redirige vers la page de connexion si non authentifié
    }
    return isAuthenticated;
  }
}
