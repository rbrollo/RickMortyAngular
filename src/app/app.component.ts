import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuscarPersonagemComponent } from './components/buscar-personagem/buscar-personagem.component';
import { HeroComponent } from './components/hero/hero.component';
import { CardComponent } from './components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { concat } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    BuscarPersonagemComponent,
    HeroComponent,
    CardComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'RickMortyAngular';
  firstFourCharacters: string[] = [];
  http = inject(HttpClient);
  characters: string[] = [];
  ngOnInit(): void {
    this.getAllCharacter();
  }
  getAllCharacter() {
    this.http
      .get('https://rickandmortyapi.com/api/character')
      .subscribe((response: any) => {
        this.characters = response.results;
        this.getAllCharacterNextPage(response.info.next);
      });
  }
  getAllCharacterNextPage(nextPage: any) {
    this.http.get(nextPage).subscribe((response: any) => {
      //Junto as duas páginas no mesmo array
      this.characters = this.characters.concat(response.results);
      // Embaralhar o array results
      const shuffledResults = this.shuffle(this.characters);
      // // Selecionar os 6 primeiros elementos
      this.firstFourCharacters = shuffledResults.slice(0, 6);
    });
  }
  // Função para embaralhar o array
  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // Enquanto ainda existirem elementos para embaralhar
    while (currentIndex !== 0) {
      // Escolha um elemento restante
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // E troque-o com o elemento atual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
