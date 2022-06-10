import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 // @ViewChild('sidenavbar') side: MatSidenav;
  desplegado = true;
  verMenu: boolean = false;
  muestra = false;
  verDentroMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mouseEnters() {
    if(!this.verMenu){
      this.muestra = true;
    }
  }

  mouseLeaves() {
    if(!this.verMenu){
      this.muestra = false;
    }
  }



}
