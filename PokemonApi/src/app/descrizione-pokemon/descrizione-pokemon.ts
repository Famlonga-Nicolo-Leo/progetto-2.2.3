import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DescrizionePokemon } from '../models/models';

@Component({
  selector: 'app-descrizione-pokemon',
  imports: [CommonModule],
  templateUrl: './descrizione-pokemon.html',
  styleUrl: './descrizione-pokemon.css',
})
export class DescrizionePokemonComponent {
  data!: DescrizionePokemon;
  o!: Observable<DescrizionePokemon>;
  loading = false;
  nome = '';

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.nome = this.route.snapshot.params['name'];
    console.log('Pokemon selezionato:', this.nome);
  }

  RequestPokemonDescription(): void {
    if (!this.nome) {
      return;
    }
    this.loading = true;
    this.o = this.http.get<DescrizionePokemon>(`https://pokeapi.co/api/v2/pokemon/${this.nome}`);
    this.o.subscribe({
      next: this.GetPokemon,
      error: (err) => {
        console.error('Errore nella richiesta descrizione:', err);
        this.loading = false;
      }
    });
  }

  GetPokemon = (d: DescrizionePokemon) => {
    console.log('Dati pokemon ricevuti:', d);
    this.loading = false;
    this.data = d;
  };
}
