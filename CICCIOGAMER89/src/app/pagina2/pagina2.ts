import { Component } from '@angular/core';
import { NasaService } from '../services/nasa-service';

@Component({
  selector: 'app-pagina2',
  imports: [],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 {
  data: any;
constructor(private nasa: NasaService) {}
ngOnInit() {
this.nasa.getApod().subscribe((risposta: any) => {
this.data = risposta;

});
}
}


