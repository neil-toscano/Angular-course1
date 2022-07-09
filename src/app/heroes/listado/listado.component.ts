import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes:string[]=['Spider','Ironma','Hulk'];
  heroeborrado:string|undefined='';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe(){
    console.log('borrando...');
     this.heroeborrado=this.heroes.shift()|| '';
  }
  preguntaHeroeBorr():boolean{
    if(this.heroeborrado==''){
      return false;
    }
    return true;
  }

}
