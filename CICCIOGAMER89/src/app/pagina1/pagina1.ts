import { Component } from '@angular/core';
import { CatService } from '../services/cat-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina1',
  imports: [CommonModule],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.css',
})
export class Pagina1 {
fact: any;
constructor(private catService: CatService) {}
ngOnInit() {
this.caricaFatto();
}
caricaFatto() {
this.catService.getRandomFact().subscribe(risposta => {
this.fact = risposta;
});
}
}