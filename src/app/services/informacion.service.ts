import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros = true;
  equipo:any[] = [];

  constructor( public http:Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info() {
    this.http.get("assets/data/info.pagina.json")
      .subscribe( data => {
        // console.log(data.json());
        this.cargada = true;
        this.info = data.json();
      })
  }

  carga_sobre_nosotros() {
    this.http.get("https://angularwebpage.firebaseio.com/equipo.json")
      .subscribe( data => {
        console.log(data.json());
        this.cargada = true;
        this.equipo = data.json();
      })
  }
}
