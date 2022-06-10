import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MenuComponent } from './core/menu/menu.component';
import { MaterialModule } from './material/material.module';

import { FeatureAlumnosModule } from './feature-alumnos/feature-alumnos.module';
import { ListaLaumnosComponent } from './feature-alumnos/lista-laumnos/lista-laumnos.component';
import { FormComponent } from './feature-alumnos/form/form.component';
import { RouterModule } from '@angular/router';

const appRoutes = [

  {
    path: 'app-form',component: FormComponent,
  },
  {
    path: '',component : ListaLaumnosComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FeatureAlumnosModule,
    RouterModule.forRoot(appRoutes)
   

  ],
  providers: [

  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
