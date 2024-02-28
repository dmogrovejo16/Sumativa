import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class APIServiceService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  private apiUrlItem = `https://pokeapi.co/api/v2/item/`;


  constructor(public http: HttpClient) { }
  getPokemonID(id: number): Observable<any> {
    // Utiliza el método get del HttpClient para realizar una solicitud GET a la URL de la PokeAPI con el ID del Pokémon.
    return this.http.get(this.apiUrl+"pokemon/"+id);

  }

  getItemID(id: number): Observable<any> {
    // Utiliza el método get del HttpClient para realizar una solicitud GET a la URL de la PokeAPI con el ID del Pokémon.
    return this.http.get(this.apiUrlItem+id);

  }

  getItemNAME(name: string): Observable<any> {
    // Utiliza el método get del HttpClient para realizar una solicitud GET a la URL de la PokeAPI con el ID del Pokémon.
    return this.http.get(this.apiUrlItem+name);

  }

  getPokemonName(name: string): Observable<any> {
    // Utiliza el método get del HttpClient para realizar una solicitud GET a la URL de la PokeAPI con el nombre del Pokémon.
    return this.http.get(this.apiUrl+"pokemon/"+name);
  }

}
