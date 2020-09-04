import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apprentice} from '../Modelo/Apprentice';
import { SearchComponent } from '../routines/search/search.component';
import { stringify } from '@angular/compiler/src/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:320/I_FIT/apprenticedata?journey=';

  Url2='http://localhost:320/I_FIT/apprentice?id=';

  Url3='http://localhost:320/I_FIT/apprentice?apprentice=';

  getInfoForInstructor(){
    return this.http.get<Apprentice[]>(this.Url+this.obtainLocalStorage());
  }

  getApprenticeId(id:string){
    return this.http.get<Apprentice>(this.Url2+id);
  }

  obtainLocalStorage(): string{
    return localStorage.getItem("journey");
  }

  updateRoutine(apprentice:Apprentice, id: number){
    return this.http.get<Apprentice>(this.Url3+apprentice+id);
  }
}
