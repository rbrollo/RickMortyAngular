import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscarPersonagemComponent } from './components/buscar-personagem/buscar-personagem.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscarPersonagemComponent,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RickMortyAngular';
}
