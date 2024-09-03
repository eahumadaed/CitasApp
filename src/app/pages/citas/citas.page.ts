import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { ConfiguracionService } from '../../services/configuracion.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  citaAleatoria: { frase: string; autor: string } | undefined;
  mostrarCita: boolean = true;

  constructor(
    private citasService: CitasService,
    private configuracionService: ConfiguracionService
  ) {}

  async ngOnInit() {
    this.mostrarCita = !(await this.configuracionService.obtenerConfiguracion('eliminarCitasInicio'));
    if (this.mostrarCita) {
      this.cargarCitaAleatoria();
    }
  }

  cargarCitaAleatoria() {
    this.citaAleatoria = this.citasService.obtenerCitaAleatoria();
  }

  nuevaCita() {
    if (this.mostrarCita) {
      this.cargarCitaAleatoria();
    }
  }
}
