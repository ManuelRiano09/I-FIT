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
  machines : Machine[];
  routine: Routine = new Routine();

  exercise1: Exercise = new Exercise();
  exercise2: Exercise = new Exercise();
  description = 'una breve descripcion';
  machine1Name: string;
  machine1: Machine = new Machine();
  machine2: Machine = new Machine();
  series1: number;
  repetisiones1: number;
  machine2Object: Machine;
  series2: number;
  repetisiones2: number;

  expresionByExercise4 = true;
  expresionByExercise5 = true;
  expresionByExercise6 = true;
  sendRoutine = false;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.CallInfo();
    this.CallMachines();
  }

  CallInfo() { //info of the apprentice
    let id = localStorage.getItem('document');
    this.service.getApprenticeId(id).subscribe((data) => {
      this.apprentice = data;
    });
  }

  CallMachines(){
    this.service.getMachines().subscribe((data) => {
      this.machines = data;
    });
  }

  AddExercise1() {
    this.machine1.name = this.machine1Name;

    this.exercise1.name = (<HTMLInputElement>(
      document.getElementById('name1')
    )).value;
    this.exercise1.description = (<HTMLInputElement>(
      document.getElementById('description1')
    )).value;
    this.exercise1.series = this.series1;
    this.exercise1.repetition = this.repetisiones1;
    this.machine1.name = this.machine1Name;
    this.machine1.description = this.description;
    this.exercise1.Machine = this.machine1;
    this.sendRoutine = true;
    console.log(this.exercise1);
  }

  Maquina1(event: any) {
    var nameMachine = event.target.value;
    this.machine1Name = nameMachine;
  }
  Series1(event: any) {
    var series = event.target.value;
    this.series1 = series;
  }
  Repetisiones1(event: any) {
    var repetisiones = event.target.value;
    this.repetisiones1 = repetisiones;
  }

  AddExercise2() {
    
    this.exercise2.name = (<HTMLInputElement>(
      document.getElementById('name2')
    )).value;
    this.exercise2.description = (<HTMLInputElement>(
      document.getElementById('description2')
    )).value;
    this.exercise2.series = this.series2;
    this.exercise2.repetition = this.repetisiones2;
    
    console.log(this.machine2);
    this.exercise2.Machine = this.machine2;
    console.log(this.exercise2);
  }

  Maquina2(event: any) {
    let arr = event.target.value;
    console.log(arr[0]);
    this.machine2.description = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
  }

  Series2(event: any) {
    let series = event.target.value;
    this.series2 = series;
  }
  Repetisiones2(event: any) {
    let repetisiones = event.target.value;
    this.repetisiones2 = repetisiones;
  }

  AddRoutine() {
    let exercises = [];
    exercises.push(this.exercise1);
    this.apprentice.routine.exercises = exercises;
    
    console.log(this.apprentice);
  }

  UpdateRoutine() {
    this.AddRoutine();
    this.service.updateRoutine(this.apprentice);
    alert('todo ha salido bien');
  }

  
}
