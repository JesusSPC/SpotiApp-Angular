import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { 
    console.log("Spotify Service listo")
  }

  getNewReleases() {

  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCUS4UdrK58PNtAtSLSE-_L19E-5KtJnKANjVpRFT500wmUEvtUCnhAXPJphe-Ij_lvK500FS4DS20KSC4',
  })
  return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
