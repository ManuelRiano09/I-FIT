import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Apprentice } from 'src/app/Modelo/Apprentice';
import { Exercise } from '../../Modelo/Exercise';
import { Machine } from 'src/app/Modelo/Machine';
import { Routine } from 'src/app/Modelo/Routine';
import { StatusEnum } from 'src/app/Modelo/Status';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  apprentice: Apprentice = new Apprentice();
  machines: Machine[];
  routine: Routine = new Routine();

  exercisesList: Exercise[] = new Array();

  exercise1: Exercise = new Exercise();
  exercise2: Exercise = new Exercise();
  exercise3: Exercise = new Exercise();
  exercise4: Exercise = new Exercise();
  exercise5: Exercise = new Exercise();
  exercise6: Exercise = new Exercise();

  expresionByExercise4 = true;
  expresionByExercise5 = true;
  expresionByExercise6 = true;
  sendRoutine = false; // boton de enviar rutina V = visible F = invisible (se activa enviando el primer ejercicio)

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.CallInfo();
    this.CallMachines();
  }

  CallInfo() {
    //info of the apprentice
    let id = localStorage.getItem('document');
    this.service.getApprenticeId(id).subscribe((data) => {
      this.apprentice = data;
    });
  }

  CallMachines() { //llamar las maquinas para poblar en los ejercicios
    this.service.getMachines().subscribe((data) => {
      this.machines = data;
    });
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AddExercise1() {
    this.exercise1.name = (<HTMLInputElement>(
      document.getElementById('name1')
    )).value;
    this.exercise1.description = (<HTMLInputElement>(
      document.getElementById('description1')
    )).value;
    console.log(this.exercise1);
    this.exercisesList.push(this.exercise1);
  }

  Maquina1(event: any) {
    this.exercise1.machineName = event.target.value;
  }
  Series1(event: any) {
    this.exercise1.series = event.target.value;
  }
  Repetisiones1(event: any) {
    this.exercise1.repetition = event.target.value;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AddExercise2() {
    this.exercise2.name = (<HTMLInputElement>(
      document.getElementById('name2')
    )).value;
    this.exercise2.description = (<HTMLInputElement>(
      document.getElementById('description2')
    )).value;
    console.log(this.exercise2);
    this.exercisesList.push(this.exercise2);
  }

  Maquina2(event: any) {
    this.exercise2.machineName = event.target.value;
  }

  Series2(event: any) {
    this.exercise2.series = event.target.value;
  }
  Repetisiones2(event: any) {
    this.exercise2.repetition = event.target.value;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AddExercise3() {
    this.exercise3.name = (<HTMLInputElement>(
      document.getElementById('name3')
    )).value;
    this.exercise3.description = (<HTMLInputElement>(
      document.getElementById('description3')
    )).value;
    // console.log(this.exercise3);
    this.exercisesList.push(this.exercise3);
  }

  Maquina3(event: any) {
    this.exercise3.machineName = event.target.value;
  }

  Series3(event: any) {
    this.exercise3.series = event.target.value;
  }
  Repetisiones3(event: any) {
    this.exercise3.repetition = event.target.value;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AddExercise4() {
    this.exercise4.name = (<HTMLInputElement>(
      document.getElementById('name4')
    )).value;
    this.exercise4.description = (<HTMLInputElement>(
      document.getElementById('description4')
    )).value;
    // console.log(this.exercise4);
    this.exercisesList.push(this.exercise4);
  }

  Maquina4(event: any) {
    this.exercise4.machineName = event.target.value;
  }

  Series4(event: any) {
    this.exercise4.series = event.target.value;
  }
  Repetisiones4(event: any) {
    this.exercise4.repetition = event.target.value;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AddExercise5() {
    this.exercise5.name = (<HTMLInputElement>(
      document.getElementById('name5')
    )).value;
    this.exercise5.description = (<HTMLInputElement>(
      document.getElementById('description5')
    )).value;
    // console.log(this.exercise5);
    this.exercisesList.push(this.exercise5);
  }

  Maquina5(event: any) {
    this.exercise5.machineName = event.target.value;
  }

  Series5(event: any) {
    this.exercise5.series = event.target.value;
  }
  Repetisiones5(event: any) {
    this.exercise5.repetition = event.target.value;
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AddExercise6() {
    this.exercise6.name = (<HTMLInputElement>(
      document.getElementById('name6')
    )).value;
    this.exercise6.description = (<HTMLInputElement>(
      document.getElementById('description6')
    )).value;
    // console.log(this.exercise6);
    this.exercisesList.push(this.exercise6);
  }

  Maquina6(event: any) {
    this.exercise6.machineName = event.target.value;
  }

  Series6(event: any) {
    this.exercise6.series = event.target.value;
  }
  Repetisiones6(event: any) {
    this.exercise6.repetition = event.target.value;
  }


  UpdateRoutine() {
    this.apprentice.routine.exercises = this.exercisesList;
    this.service.updateRoutine(this.apprentice);
    console.log(this.apprentice);
  }
}
