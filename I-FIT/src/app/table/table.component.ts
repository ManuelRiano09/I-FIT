import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Apprentice } from '../Modelo/Apprentice';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  datos: Apprentice[];

  columnas: string[] = ['codigo', 'descripcion', 'precio'];
//
//  datos: Articulo[] = [new Articulo(1, 'papas', 55),
//  new Articulo(2, 'manzanas', 53),
//  new Articulo(3, 'naranjas', 25),
//  ];

  dataSource = null;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    
    this.dataSource = new MatTableDataSource(this.datos);
    this.service.getInfoForInstructor().subscribe((data) => {
      this.datos = data;
    });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}