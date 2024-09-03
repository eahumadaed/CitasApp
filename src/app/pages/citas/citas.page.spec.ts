import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  citaAleatoria: { frase: string; autor: string } | undefined;

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.cargarCitaAleatoria();
  }

  cargarCitaAleatoria() {
    this.citaAleatoria = this.citasService.obtenerCitaAleatoria();
  }

  nuevaCita() {
    this.cargarCitaAleatoria();
  }
}
