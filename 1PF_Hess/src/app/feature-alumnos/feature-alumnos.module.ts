import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaLaumnosComponent } from './lista-laumnos/lista-laumnos.component';
import { RouterModule } from '@angular/router';
import { AlumnosRoutingModule } from './alumnos-routing.module';



const rutaAlumnos = [
  {
    path: 'alumnos', 
    loadChildren: () => import('./lista-laumnos/lista-laumnos.component').then(m => m.ListaLaumnosComponent),

  },
]

@NgModule({
  declarations: [
    ListaLaumnosComponent


  ],
  imports: [
    BrowserModule,
    RouterModule,
    AlumnosRoutingModule
  ],
  exports: [

  ]
})
export class FeatureAlumnosModule { }
