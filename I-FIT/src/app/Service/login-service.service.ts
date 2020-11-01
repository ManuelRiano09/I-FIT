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
  url3 = 'http://localhost:10101/I_FIT/register';


  constructor(public auth: AngularFireAuth, private http: HttpClient) { 

    this.auth.authState.subscribe( user  => {

      console.log('Estado del usuario' , user);

      if (!user){
        return;
      }

      this.user.id = user.uid;
      this.user.name = user.displayName;
      this.user.email = user.email;
      this.user.photo = user.photoURL;
    });
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    localStorage.setItem("userLogged", JSON.stringify(this.user));
  }

  logout() {
    this.auth.signOut();
    localStorage.setItem("userLogged", 'unlogged');
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
    localStorage.setItem("userLogged", JSON.stringify(this.user));
    return this.user;
  }

  registerUser(apprentice: Apprentice) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    this.http.put(this.url3, apprentice, {headers}).subscribe(response => console.log(response),
    error => console.log("algo fallo"));
  }
}
