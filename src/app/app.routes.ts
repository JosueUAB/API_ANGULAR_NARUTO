import { Routes } from '@angular/router';
import { NarutoComponent } from './pages/naruto/naruto.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GatosComponent } from './pages/gatos/gatos.component';

export const routes: Routes = [
  {path: '', component: NarutoComponent},
  {path:'naruto', component:NarutoComponent},
  {path:'pokemon',component:PokemonComponent},
  {path:'gatos', component:GatosComponent},
  {path:'**', component:NarutoComponent},
];
