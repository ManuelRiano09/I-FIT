import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Apprentice } from 'src/app/Modelo/Apprentice';
import { Exercise } from "../../Modelo/Exercise";
import { Machine } from 'src/app/Modelo/Machine';
import { Routine } from 'src/app/Modelo/Routine';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  apprentice: Apprentice = new Apprentice();
  routine: Routine = new Routine();
  
  exercise1: Exercise = new Exercise();
  exercise2: Exercise = new Exercise();
  description: string = 'una breve descripcion';
  machine1Name: string ;
  machine1: Machine = new Machine();
  machine2: Machine = new Machine();
  series1: number;
  repetisiones1: number;
  machine2Name: string;
  series2: number;
  repetisiones2: number;

  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.CallInfo();
  }

  CallInfo(){
    let id = localStorage.getItem("document");
    this.service.getApprenticeId(id)
    .subscribe(data=>{
      this.apprentice=data;
    })
  }

  AddExercise1() {
    this.machine1.name = this.machine1Name;
    
    this.exercise1.name = ( <HTMLInputElement> document.getElementById('name1')).value;
    this.exercise1.description =  ( <HTMLInputElement> document.getElementById('description1')).value;
    this.exercise1.series = this.series1;
    this.exercise1.repetition = this.repetisiones1;
    this.machine1.name = this.machine1Name;
    this.machine1.description = this.description;
    this.exercise1.Machine = this.machine1;
    console.log(this.exercise1);
  }

  Maquina1(event: any){
    var nameMachine = event.target.value;
    this.machine1Name = nameMachine;
  }
  Series1(event: any){
    var series = event.target.value;
    this.series1 = series;
  }
  Repetisiones1(event: any){
    var repetisiones = event.target.value;
    this.repetisiones1 = repetisiones;
  }

  AddExercise2(){
    
    this.machine2.name = this.machine2Name;
    this.exercise2.name = ( <HTMLInputElement> document.getElementById('name2')).value;
    this.exercise2.description =  ( <HTMLInputElement> document.getElementById('description2')).value;
    this.exercise2.series = this.series2;
    this.exercise2.repetition = this.repetisiones2;
    this.machine2.name = this.machine2Name;
    this.machine2.description = this.description;
    this.exercise2.Machine = this.machine2;
    console.log(this.exercise2);
  }

  Maquina2(event: any){
    let nameMachine = event.target.value;
    this.machine2Name = nameMachine;
  }
  Series2(event: any){
    var series = event.target.value;
    this.series2 = series;
  }
  Repetisiones2(event: any){
    var repetisiones = event.target.value;
    this.repetisiones2 = repetisiones;
  }

  AddRoutine(){
    let exercises = [];

    exercises.push(this.exercise1);
    exercises.push(this.exercise2);
    this.routine.exercise = exercises;
    this.apprentice.routine = this.routine;
    console.log(this.apprentice) ;
    this.UpdateRoutine();
  }
  
  UpdateRoutine(){
    this.service.updateRoutine(this.apprentice, this.apprentice.document);
    alert("todo ha salido bien");
  }


}
