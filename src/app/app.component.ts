import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscarPersonagemComponent } from './components/buscar-personagem/buscar-personagem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuscarPersonagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RickMortyAngular';
}
