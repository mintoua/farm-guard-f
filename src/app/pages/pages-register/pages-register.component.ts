import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  user: User = new User(); // Instanciez un nouvel objet User

  onFormSubmit() {
    // Récupérez les valeurs du formulaire
    const email = this.user.email;
    const username = this.user.username;
    const password = this.user.password;

    this.user.email(email);
    // Utilisez les valeurs pour vos opérations
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    // Vous pouvez également appeler votre service d'inscription ici pour envoyer les données au serveur
  }
}
