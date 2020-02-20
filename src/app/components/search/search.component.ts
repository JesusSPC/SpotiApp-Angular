import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas:any[] = [];
  loading:boolean;
  texto:string;

  constructor( private spotify:SpotifyService) { 
  }
  
  buscar(termino:string){
    if (!termino) return;
    this.loading = true;
    this.spotify.getArtists(termino)
    .subscribe((data:any) => {
      this.artistas = data;
      this.texto = termino;
      this.loading = false;
    })

  }

}
