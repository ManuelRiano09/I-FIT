import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Apprentice } from '../Modelo/Apprentice';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService { 

  user: Apprentice = new Apprentice();

  Url = 'http://localhost:10101/I_FIT/login';
  Url2 = 'http://localhost:10101/I_FIT/apprentice';


  constructor(public auth: AngularFireAuth, private http: HttpClient) { 

    this.auth.authState.subscribe( user  => {

      console.log('Estado del usuario' , user);

      if (!user){
        return;
      }

      this.user.id = user.uid;
    });
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

  verifyLogin() {
    console.log(this.user);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    this.http.put(this.Url, this.user, {headers}).subscribe(response => console.log(response),
    error => console.log("algo fallo"));
  }

  verifyIfIsNewAccount() {
    return this.http.get<Apprentice>(this.Url2 + "?id=" + this.user.id);

  }

  obtainUser(): Apprentice{
    this.verifyIfIsNewAccount().subscribe((data) => {
      this.user = data;
    });
    return this.user;
  }
}
