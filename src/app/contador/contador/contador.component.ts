
import {Component} from '@angular/core'
@Component({
    selector:'app-contador',
    template:`
    <h1>{{titulo }} {{'everithing works'}}</h1>
<h1>La base es: <strong>{{base}}</strong></h1>
<button (click)="acumular(base)">{{'+'+ base}}</button>
<span>{{cont}}</span>
<button (click)="acumular(-base)">{{'-'+base}}</button>
    
    `
})
export class ContadorComponent{
    titulo= 'bases';
  base:number=5;
  cont:number=0;
  acumular(valor:number){
    this.cont+=valor;
  }

}