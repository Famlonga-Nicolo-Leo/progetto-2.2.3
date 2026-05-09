import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ListaPokemon } from '../models/models';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class ListaComponent implements OnInit {
  data!: ListaPokemon;
  o!: Observable<ListaPokemon>;
  loading: boolean = false;
  tipo = '';

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];
    });
  }

  ngOnInit(): void {
    this.RequestType();
  }

  RequestType(): void {
    this.loading = true;
    this.o = this.http.get<ListaPokemon>("https://pokeapi.co/api/v2/type/");
    this.o.subscribe(this.GetTypepokemon);
  }

  GetTypepokemon = (d: ListaPokemon) => {
    this.loading = false;
    this.data = d;
  };
}
