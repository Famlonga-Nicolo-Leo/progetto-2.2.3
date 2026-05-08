import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class ListaComponent {
data! : any;
o! : Observable<object>
loading: boolean = false;
tipo = '';
constructor(public http : HttpClient,private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
  this.tipo = params['tipo'];
  });
}

RequestType() : void{
    this.loading= true
    this.o = this.http.get("https://pokeapi.co/api/v2/type/")
    this.o.subscribe(this.GetTypepokemon);
  }
  GetTypepokemon =(d: any) => {
    this.loading = false
    this.data = d
    
  }

  

}
