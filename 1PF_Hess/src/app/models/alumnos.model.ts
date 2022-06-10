export class Alumnos {
    nombre: string;
    apellido: string;
    nota: number;
    curso: string;
    aprobado: boolean;
    id: number;
    constructor(nombre: string, apellido: string, nota: number, curso: string, aprobado: boolean, id: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
        this.curso = curso;
        this.aprobado = aprobado;
        this.id = id;
    }

}
