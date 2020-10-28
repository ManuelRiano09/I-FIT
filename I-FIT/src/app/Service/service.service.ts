import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Apprentice } from '../Modelo/Apprentice';
import { Machine } from '../Modelo/Machine';
import { Exercise } from '../Modelo/Exercise';




@Injectable({
  providedIn: 'root',
})
export class ServiceService {




  constructor(private http: HttpClient ) {
  }

  Url = 'http://localhost:10101/I_FIT/apprenticedata'; // obtain the data by journey (instrcutor)
  Url2 = 'http://localhost:10101/I_FIT/apprentice'; // obtain one apprentice by his document (instructor, apprentice)
  Url4 = 'http://localhost:10101/I_FIT/saveroutine'; // update one routine (instructor)
  UrlForMachine = 'http://localhost:10101/I_FIT/machines'; // obtain the machines (instrcutor)
  Url5 = 'http://localhost:10101/I_FIT/apprenticedata/filter?journey=';

  getInfoForInstructor() {
    return this.http.get<Apprentice[]>(this.Url + "?journey=" + this.obtainLocalStorage());
  }

  getApprenticeId(id: string) {
    return this.http.get<Apprentice>(this.Url2 + "?id=" + id);
  }

  updateRoutine(apprentice: Apprentice) {
    console.log(apprentice);
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    this.http.put(this.Url4, apprentice, {headers}).subscribe(response => console.log(response),
    error => console.log("algo fallo"));
  }

  getMachines() { 
    return this.http.get<Machine[]>(this.UrlForMachine);
  }

  filterByStatus(){
    return this.http.get<Apprentice[]>(this.Url5 + this.obtainLocalStorage() + '&condition=' + this.obtainStatusStorage());
  }

  obtainExerciseOfApprentice(id: string){
    return this.http.get<Exercise[]>(this.Url + "/exercise?document=" + id);
  }

  private obtainLocalStorage(): string {
    return localStorage.getItem('journey');
  }

  private obtainStatusStorage(): string{
    return localStorage.getItem('status');
  }

  
}
