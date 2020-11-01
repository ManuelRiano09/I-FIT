import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../../app/Service/service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

  title = 'I-FIT';

  constructor(private router: Router, private service: ServiceService){

  }

  Search(){
    this.router.navigate(['search']);
  }

  Init(){
    this.router.navigate(['init']);
  }

  signIn(){
    this.router.navigate(['login']);
  }

}
