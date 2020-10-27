import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprentice } from 'src/app/Modelo/Apprentice';

import {LoginServiceService} from '../../Service/login-service.service';

@Component({
  selector: 'app-apprentice-register',
  templateUrl: './apprentice-register.component.html',
  styleUrls: ['./apprentice-register.component.css']
})
export class ApprenticeRegisterComponent implements OnInit {

  user: Apprentice = new Apprentice();

  constructor(private service: LoginServiceService, private router: Router) {

   }

  ngOnInit(): void {
  }

  login(){
    this.service.login();
  }

  logOut(){
    this.service.logout();
    
  }

  enter(){
    this.service.verifyLogin();
  }

  search(){
    this.service.verifyIfIsNewAccount();
    let apprentice: Apprentice = this.service.obtainUser();
    console.log(apprentice);
  }


}

