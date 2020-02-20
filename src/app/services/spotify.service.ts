import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { 
    console.log("Spotify Service listo")
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBp3n5OTAx-agofKd8pfwBFNvp_iVTNg0iyr8xY_-aU9LqUotOB7SkkMCKpmBpANc5uQ1pdSxh1oYrC_bbTVsmKuWBxx_nDXmFzHXR_61VmTmwZN1oqUz93huOl0A7zK6ecZw_0yQ',
    })

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
      .pipe(map( data  => data['albums'].items ))
  }

  getArtist(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map( data => data['artists'].items))
  }
}
