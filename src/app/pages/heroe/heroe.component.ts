import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/hereo.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit{
  ngOnInit(): void {

  }

  heroe:  HeroeModel= new HeroeModel();

  constructor()   {}

  guardar( form: NgForm ) {

    if( form.invalid){
      console.log('Formulario no válido');
      return;
    }
    console.log(form);
    console.log(this.heroe);

  }
}
