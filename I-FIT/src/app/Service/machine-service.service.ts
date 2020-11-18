import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Machine } from '../Modelo/Machine';

@Injectable({
  providedIn: 'root'
})
export class MachineServiceService {

  constructor(private http: HttpClient) { }

  UrlForMachine = 'http://localhost:10101/I_FIT/machines'; // obtain the machines (instrcutor)

  getMachines() { 
    return this.http.get<Machine[]>(this.UrlForMachine);
  }
}
