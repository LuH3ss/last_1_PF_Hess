import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumnos } from '../../models/alumnos.model';
@Injectable({
    providedIn: 'root'
})
export class AlumnosService {
    ALUMNOS: Alumnos[] = [
        {
            nombre: 'Juan',
            apellido: 'Perez',
            nota: 5,
            curso: 'Angular',
            aprobado: true,
            id: 1
        },
        {
            nombre: 'Pedro',
            apellido: 'Gomez',
            nota: 4,
            curso: 'Angular',
            aprobado: false,
            id: 2
        },
        {
            nombre: 'Maria',
            apellido: 'Lopez',
            nota: 3,
            curso: 'Angular',
            aprobado: true,
            id: 3
        },
        {
            nombre: 'Ana',
            apellido: 'Martinez',
            nota: 2,
            curso: 'Angular',
            aprobado: false,
            id: 4
        },
        {
            nombre: 'Juana',
            apellido: 'Gonzalez',
            nota: 1,
            curso: 'Angular',
            aprobado: true,
            id: 5
        }
    ];


    constructor() { }


    getAlumnos(): Observable<Alumnos[]> {
        return of(this.ALUMNOS);
    }
    deleteAlumno(id: number) {
        this.ALUMNOS = this.ALUMNOS.filter(alumno => alumno.id !== id);
    }

}
