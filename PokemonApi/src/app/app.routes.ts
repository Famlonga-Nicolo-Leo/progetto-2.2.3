import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista';
import { NomiPokemonComponent } from './nomi-pokemon/nomi-pokemon';
import { DescrizionePokemonComponent } from './descrizione-pokemon/descrizione-pokemon';

export const routes: Routes = [
    { path: '', component: ListaComponent },
    { path: 'lista/:tipo', component: ListaComponent },
    { path: 'nomi-pokemon/:tipo', component: NomiPokemonComponent },
    { path: 'descrizione-pokemon/:name', component: DescrizionePokemonComponent }
];
