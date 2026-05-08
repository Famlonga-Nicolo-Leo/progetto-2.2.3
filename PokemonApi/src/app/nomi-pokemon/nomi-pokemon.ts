import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nomi-pokemon',
  imports: [CommonModule, RouterLink],
  templateUrl: './nomi-pokemon.html',
  styleUrl: './nomi-pokemon.css',
})
export class NomiPokemon {
  data: any;
  o!: Observable<object>;
  loading: boolean = false;
  tipo = '';

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.tipo = this.route.snapshot.params['tipo'];
    console.log('Tipo ricevuto:', this.tipo);
  }

  RequestPokemonByType(): void {
    this.loading = true;
    console.log('Facendo richiesta per tipo:', this.tipo);
    this.o = this.http.get(`https://pokeapi.co/api/v2/type/${this.tipo}`);
    this.o.subscribe({
      next: this.GetPokemon,
      error: (err) => {
        console.error('Errore nella richiesta:', err);
        this.loading = false;
      }
    });
  }

  GetPokemon = (d: any) => {
    console.log('Dati ricevuti:', d);
    this.loading = false;
    this.data = d;
  };
}
