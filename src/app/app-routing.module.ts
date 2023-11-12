import { NgModule, Component } from '@angular/core';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id' , component: HeroeComponent},
  {path: '**', pathMatch: 'full' , redirectTo: 'heroes'}
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
  RouterModule
  ]
})
export class AppRoutingModule { }
