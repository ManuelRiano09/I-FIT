import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/Modelo/Machine';
import { MachineServiceService } from '../../Service/machine-service.service';

@Component({
  selector: 'app-machine-instructor',
  templateUrl: './machine-instructor.component.html',
  styleUrls: ['./machine-instructor.component.css']
})
export class MachineInstructorComponent implements OnInit {

  machines: Machine[];

  constructor(private service: MachineServiceService ) { }

  ngOnInit(): void {
    this.CallMachines();
  }

  CallMachines() { //llamar las maquinas para poblar en los ejercicios
    this.service.getMachines().subscribe((data) => {
      this.machines = data;
    });
  }

}
