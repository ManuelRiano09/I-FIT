import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Apprentice } from 'src/app/Modelo/Apprentice';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  apprentice:Apprentice = new Apprentice();
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("document");
    this.service.getApprenticeId(id)
    .subscribe(data=>{
      this.apprentice=data;
    })
  }

}
