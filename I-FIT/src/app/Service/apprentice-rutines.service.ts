import { Injectable } from '@angular/core';

@Injectable()

export class ApprenticeServices {
    /* Objeto rutinas */
    private rutines: ApprenticeRutines[] = [
        {
            repeticiones: 10,
            series: 3,
            ejercicio: 'Sentadilla',
            maquina: 'Ninguna',
            descripcion: 'Separ las piernas al ancho de los hombros y bajar a 90 grados'
        },
        {
            repeticiones: 20,
            series: 3,
            ejercicio: 'Tijeras',
            maquina: 'Ninguna',
            descripcion: 'Bajar con la espalda recta'
        },
        {
            repeticiones: 40,
            series: 3,
            ejercicio: 'Saltos',
            maquina: 'Ninguna',
            descripcion: 'Separ las piernas al ancho de los hombros'
        }
    ];

    /* Objeto aprendiz */
    private aprendiz: Aprendiz[] = [
        {
            nombre: 'Jairo Romero',
            ficha: 1835213
        }
    ];

    constructor(){
    }

    /* Metodo para obtener info de la rutina */
    getRutines(): ApprenticeRutines[] {
        return this.rutines;
    }
    /* Metodo para obtener info del aprendiz */
    getAprendiz(): Aprendiz[]{
        return this.aprendiz;
    }
}
/* Interfaces de los objetos */
export interface ApprenticeRutines{
    repeticiones: number;
    series: number;
    ejercicio: string;
    maquina: string;
    descripcion: string;
}

export interface Aprendiz{
    nombre: string;
    ficha: number;
}
