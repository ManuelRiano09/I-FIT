import { Component, OnInit } from '@angular/core';
import { ApprenticeServices } from '../../Service/apprentice-rutines.service';



@Component({
  selector: 'app-apprentice-module',
  templateUrl: './apprentice-module.component.html',
  styleUrls: ['./apprentice-module.component.css']
})
export class ApprenticeModuleComponent implements OnInit {

  mostrar = false;
  rutinas: any[] = [];
  aprendiz: any[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _rutinasService: ApprenticeServices) { }

  ngOnInit(): void {
    this.rutinas = this._rutinasService.getRutines();
    this.aprendiz = this._rutinasService.getAprendiz();
    console.log(this.rutinas);
  }

}
