import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
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
  apprenticesNew: Apprentice[];
  apprenticesFinished: Apprentice[];
  journies: JourneyEnum;
  opcionSeleccionado: string = 'MORNING';
  all = true;
  finished = false;
  new = false;
  statusSeleccionado: string;
  searchDocument = ''; //initialised the text variable 

  dataSource = null;


  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.obtainAllData();
    this.dataSource = new MatTableDataSource(this.apprentices);
  }

  Edit(apprentice: Apprentice) {
    localStorage.setItem('document', apprentice.document.toString());
    this.router.navigate(['edit']);
  }

  capturar(event: any) {
    this.opcionSeleccionado = event.target.value;
    localStorage.setItem('journey', this.opcionSeleccionado);
    this.ngOnInit();
    this.all = true;
    this.finished = false;
    this.new = false;
    
  }

  obtainAllData(){
    this.service.getInfoForInstructor().subscribe((data) => {
      this.apprentices = data;
    });
  }

  filterBy(event: any){
    this.finished = true;
    this.all = false;
    this.statusSeleccionado = event.target.value;
    localStorage.setItem('status', this.statusSeleccionado);
    this.service.filterByStatus().subscribe((data) => {
      this.apprenticesNew = data;
    });
  }

  allApprentices(){
    this.all = true;
    this.finished = false;
    this.new = false;
    this.obtainAllData();
  }

  notFinishedApprentices(){
    this.finished = true;
    this.all = false;
    this.new = false;
    this.statusSeleccionado = (<HTMLInputElement>(
      document.getElementById('notFinished')
    )).value;

    localStorage.setItem('status', this.statusSeleccionado);
    this.service.filterByStatus().subscribe((data) => {
      this.apprenticesFinished = data;
    });
  }

  newApprentices(){
    this.new = true;
    this.finished = false;
    this.all = false;
    this.statusSeleccionado = (<HTMLInputElement>(
      document.getElementById('new')
    )).value;
    localStorage.setItem('status', this.statusSeleccionado);
    this.service.filterByStatus().subscribe((data) => {
      this.apprenticesNew = data;
    });
  }

  searchDocumentMethod(x) { // appending the updated value to the variable 
    this.searchDocument += x.target.value; 
  } 

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }


}
