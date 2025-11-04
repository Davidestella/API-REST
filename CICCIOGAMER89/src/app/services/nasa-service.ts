import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';

@Injectable({
providedIn: 'root'
})
export class NasaService {
constructor(private http: HttpClient) {}
getApod() {
return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${environment.nasaKey}`);

}
getAsteroidi() {
return this.http.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key==${environment.nasaKey}`);

}

}