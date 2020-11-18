import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprentice } from 'src/app/Modelo/Apprentice';
import { JourneyEnum } from 'src/app/Modelo/Journey';
import Swal from 'sweetalert2';

import { LoginServiceService } from '../../Service/login-service.service';

@Component({
  selector: 'app-apprentice-register',
  templateUrl: './apprentice-register.component.html',
  styleUrls: ['./apprentice-register.component.css']
})
export class ApprenticeRegisterComponent implements OnInit {

  user: Apprentice ;

  url = 'http//i-fit/terms&conditions.com';
  isActive: boolean;

  constructor(private service: LoginServiceService, private router: Router) {

  }

  ngOnInit(): void {
    this.ifActive();
  }

  login() {
    this.service.login();
  }

  logOut() {
    this.service.logout();
    this.ngOnInit();
  }

  async enter() {
    if(localStorage.getItem("userLogged") == 'unlogged'){
      Swal.fire({
        icon: 'error',
        text: 'Debes ingresar tu cuenta primero',
      })
    }else {
    this.service.verifyLogin();
    const { value: accept } = await Swal.fire({
      icon: 'question',
      title: 'Terminos y condiciones',      
      input: 'checkbox',
      inputValue: 0,
      footer: '<a href> www.i-fit/terms&conditios </a>',
      inputPlaceholder:
        'Acepto los terminos y condiciones',
      confirmButtonText:
        'Continue&nbsp;<i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'Necesitas aceptar los terminos y condiciones de I-FIT'
      }
    });
    if (accept) {
      this.search();
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        confirmButtonText: `Continuar`,
        allowOutsideClick: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.search();
          this.redirectInitOrRegister();
        } else if (result.isDenied) {

        }
      });
    }
  }
  }

  search() {
    this.service.verifyIfIsNewAccount();
    let apprentice: Apprentice = this.service.obtainUser();
    this.user = apprentice;
    console.log(apprentice);
  }

  redirectInitOrRegister(){
    if (this.user.document === 111){
      this.router.navigate(['register']);
      console.log('enviando a registro');
    }else{
      this.router.navigate(['init']);
    }
  }

  ifActive(){
    if((localStorage.getItem("userLogged") === 'unlogged') == false){
      let app: Apprentice = JSON.parse(localStorage.getItem( 'userLogged'));
      this.user = app;
      this.isActive = true;
    }else{
      this.isActive = false;
      
    }
  }

  facebook(){
    Swal.fire({
      icon: 'warning',
      title: 'Acceso denegado',
      text: 'Debido a las politicas de seguridad entre el servicio nacional de aprendizaje Sena junto a I-FIT, el acceso solo esta permitido con la cuenta institucional',

    })
  }

  loginAsInstructor(){
    this.router.navigate(['loginInstructor']);
  }
}

