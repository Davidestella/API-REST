import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina3.html',
  styleUrl: './pagina3.css',
})
export class Pagina3 implements OnInit {

  elemento = '';
  lista: any[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.caricaLista();
  }

  aggiungi() {
    if (!this.elemento.trim()) return;

    this.listService.aggiungiElemento(this.elemento).subscribe(() => {
      this.elemento = '';
      this.caricaLista(); // aggiorna la lista dopo l'aggiunta
    });
  }

  caricaLista() {
    this.listService.getLista().subscribe((data) => {
      // Firebase restituisce un oggetto {id: {nome: "..."}}
      this.lista = Object.keys(data || {}).map(id => ({
        id,
        nome: data[id].nome
      }));
    });
  }

  elimina(id: string) {
    this.listService.eliminaElemento(id).subscribe(() => {
      this.caricaLista(); // aggiorna la lista dopo l’eliminazione
    });
  }
}
