import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class UserService{
    readonly API_URL = 'http://192.168.1.14:8089/pfe/api/v1/users';

    //injection de dépendance de httpClient
    constructor (private httpClient: HttpClient){}

    addUser(user: User ){
        return this.httpClient.post(`${this.API_URL}/signup`, user)
    }
}