import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroe.model';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];

  constructor( private HeroesService: HeroesService){

  }

  ngOnInit(){
    this.HeroesService.getHeroes().subscribe(resp => {
      console.log(resp)
      this.heroes = resp;
    })

  }

}
