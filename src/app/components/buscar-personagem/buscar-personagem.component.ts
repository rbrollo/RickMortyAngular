import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar-personagem',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './buscar-personagem.component.html',
  styleUrl: './buscar-personagem.component.css',
})
export class BuscarPersonagemComponent implements OnInit {
  name: any = null;
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getAllCharacter();
  }
  getAllCharacter() {
    this.http
      .get('https://rickandmortyapi.com/api/character')
      .subscribe((response) => {});
  }
  getCharacterByName(name: any) {
    this.http
      .get(
        'https://rickandmortyapi.com/api/character/?name=' +
          name.form.value.name
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
