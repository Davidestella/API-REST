import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root',
})
export class CatService {
constructor(private http: HttpClient) {}
getRandomFact(): Observable<any> {
return this.http.get('https://catfact.ninja/fact');
}
}