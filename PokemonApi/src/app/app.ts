import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PokemonApi');
  constructor(private router: Router) {}

  RequestType(i: any) {
  this.router.navigate(['/lista', i.name]);
  }
}
