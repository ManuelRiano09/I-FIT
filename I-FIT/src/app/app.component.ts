import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../app/Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'I-FIT';

  constructor(private router:Router, private service:ServiceService){
  
  }
  
  ngOnInit(): void {
     this.Init();
  }
  
  Init(){
    this.router.navigate(['init']);
  }

}
