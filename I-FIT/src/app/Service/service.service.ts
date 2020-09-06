import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apprentice } from '../Modelo/Apprentice';
import { SearchComponent } from '../routines/search/search.component';
import { stringify } from '@angular/compiler/src/util';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Machine } from '../Modelo/Machine';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  Url = 'http://localhost:320/I_FIT/apprenticedata?journey=';
  Url2 = 'http://localhost:320/I_FIT/apprentice?id=';
  Url4 = 'http://localhost:320/I_FIT/saveroutine';
  UrlForMachine = 'http://localhost:320/I_FIT/machines';

  getInfoForInstructor() {
    return this.http.get<Apprentice[]>(this.Url + this.obtainLocalStorage());
  }

  getApprenticeId(id: string) {
    return this.http.get<Apprentice>(this.Url2 + id);
  }

  updateRoutine(apprentice: Apprentice) {
    return this.http.put<any>(this.Url4, apprentice);
  }

  getMachines() {
    return this.http.get<Machine[]>(this.UrlForMachine);
  }

  private obtainLocalStorage(): string {
    return localStorage.getItem('journey');
  }
}
