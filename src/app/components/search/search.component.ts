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

  constructor( private spotify:SpotifyService) { 
  }
  
  buscar(termino:string){
    this.loading = true;
    this.spotify.getArtist(termino)
    .subscribe((data:any) => {
      this.artistas = data;
      this.loading = false;
    })

  }

}
