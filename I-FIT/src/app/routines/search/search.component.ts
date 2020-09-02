import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Apprentice } from 'src/app/Modelo/Apprentice';
import { JourneyEnum } from 'src/app/Modelo/Journey';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  apprentices: Apprentice[];
  journies: JourneyEnum;
  opcionSeleccionado: string = 'MORNING';

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getInfoForInstructor().subscribe((data) => {
      this.apprentices = data;
    });
  }

  Edit(apprentice: Apprentice) {
    localStorage.setItem('document', apprentice.document.toString());
    this.router.navigate(['edit']);
  }

  capturar(event: any) {
    this.opcionSeleccionado = event.target.value;
    localStorage.setItem('journey', this.opcionSeleccionado);
    this.ngOnInit();
  }
}
