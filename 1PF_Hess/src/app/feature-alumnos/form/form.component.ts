import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { AlumnosService } from '../lista-laumnos/alumnos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formAlumnos: FormGroup

  constructor(private fb: FormBuilder, private alumnos: AlumnosService,  private router: Router,) { }

  ngOnInit(): void {
    this.formAlumnos = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      curso: ['', [Validators.required]],

    })
  }
  onSubmit() {
    let alumnos = [...this.alumnos.ALUMNOS];
    this.alumnos.getAlumnos().subscribe(val => alumnos = val);
    let i  = 1;
    if(alumnos.length > 0) {
      i = alumnos.length + 1;
      this.formAlumnos.value['id'] = i;
      alumnos.push(this.formAlumnos.value);

  }
    this.router.navigate(['/lista-alumnos'])

  }
  retornar() {
    this.router.navigate(['/lista-alumnos'])
  }

}
