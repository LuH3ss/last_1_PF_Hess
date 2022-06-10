import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlumnosService } from './alumnos.service';
import { Alumnos } from '../../models/alumnos.model';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTable, MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-lista-laumnos',
  templateUrl: './lista-laumnos.component.html',
  styleUrls: ['./lista-laumnos.component.css']
})
export class ListaLaumnosComponent implements OnInit {
  alumnos: Alumnos[] = [];
  profesor: boolean = false;
  adm: boolean = true;
  subscription: Subscription;
  @ViewChild('table') table: MatTable<Alumnos[]>;
  dataSource = new MatTableDataSource<Alumnos[]>();
  displayedColumns: string[] = ['nombre', 'nota', 'curso', 'aprobado', 'actions'];
  
  constructor(private alumno: AlumnosService, private router: Router) { }
  
      
  
   

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.subscription.add(this.alumno.getAlumnos().subscribe(
      (val) => this.alumnos = val
    )
     
        
      );
    //this.dataSource = new MatTableDataSource<Alumnos[]>(this.alumnos);
  }

  delete() {
    this.alumno.deleteAlumno(this.alumnos[0].id);
    this.table.renderRows();

  }
  editar() {}

  crear() {
    this.router.navigate(['/app-form']);
  }

  ingresarAdmin() {
    this.adm = true;
   
  }

  adminOut() {
    this.adm = false;
  }


}

