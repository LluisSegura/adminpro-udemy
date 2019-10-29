import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {   
    //Cuando se carga la página se activa la función
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ){

    this.aplicarCheck( link );

    this._ajustes.aplicarTema( tema );

  }

  aplicarCheck( link: any) {
  
  //Vanilla java script
  let selectores: any = document.getElementsByClassName('selector');
  
  //Borrar clase working
  for ( let ref of selectores ) {
    ref.classList.remove('working');
  }
  
  //Añadir clase working
  link.classList.add('working');

  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    
    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores ) {
      if( ref.getAttribute('data-theme') === tema){
       ref.classList.add('working');
       break;
      }
    }
  }

}
