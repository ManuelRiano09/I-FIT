import { isDefined } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprentice } from 'src/app/Modelo/Apprentice';
import { LoginServiceService } from 'src/app/Service/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  apprentice: Apprentice = new Apprentice();
  emptyData = false;

  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    this.welcome();
    this.apprentice = JSON.parse(localStorage.getItem( 'userLogged'));
    console.log('inicio:' , this.apprentice);
  }

    // tslint:disable-next-line: typedef
    registerUser(){
    // tslint:disable-next-line: radix
    this.apprentice.document = parseInt( ((
      document.getElementById('document')
    ) as HTMLInputElement).value);
    // tslint:disable-next-line: radix


    // tslint:disable-next-line: radix
    let height = ((
      document.getElementById('height')
    ) as HTMLInputElement).value;

    this.apprentice.height = parseFloat( height);

    this.apprentice.age = parseFloat( ((
    document.getElementById('age')
    ) as HTMLInputElement).value);

    // tslint:disable-next-line: radix
    this.apprentice.weight = parseInt( ((
      document.getElementById('weight')
      ) as HTMLInputElement).value);

    // tslint:disable-next-line: radix
    this.apprentice.comments =  ((
    document.getElementById('comments')
    ) as HTMLInputElement).value;

    // tslint:disable-next-line: radix
    this.apprentice.limitations =  ((
    document.getElementById('limitations')
    ) as HTMLInputElement).value;

    this.apprentice.password = 'registred';

    // tslint:disable-next-line: use-isnan
    if (isNaN(this.apprentice.document) || isNaN(this.apprentice.age) || isNaN(this.apprentice.height) || isNaN(this.apprentice.weight)
    || this.apprentice.journeyEnum == undefined){
      this.emptyData = true;
    }else{
      this.updateUser();
      this.router.navigate(['init']);
    }
    console.log(this.apprentice);
  }

  journey(event: any){
    this.apprentice.journeyEnum = event.target.value;
  }

  welcome(){
    Swal.fire(
      'Bienvenido a I-FIT',
      'Ahora deberas registrarte, la informacion que digites aca solo sera visible para el instructor y con fines de personalizacion en las rutinas. Mas informacion en www.i-fit/terms&conditios ',
      'info'
    );
  }

  updateUser(){
    this.service.registerUser(this.apprentice);
  }

 
}
