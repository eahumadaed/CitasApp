import { Component } from '@angular/core';
import { CitasService } from '../../services/citas.service';

interface Cita {
  frase: string;
  autor: string;
}

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage {
  nuevaCita: Cita = { frase: '', autor: '' };

  constructor(public citasService: CitasService) {}

  agregarCita() {
    if (this.nuevaCita.frase.length >= 5 && this.nuevaCita.autor.length >= 2) {
      this.citasService.agregarCita(this.nuevaCita);
      this.nuevaCita = { frase: '', autor: '' };
    } else {
      alert('Frase o autor no cumplen con los requisitos mínimos.');
    }
  }

  eliminarCita(cita: Cita) {
    this.citasService.eliminarCita(cita);
  }

  async reiniciarCitas() {
    await this.citasService.limpiarCitas();
    alert('Las citas han sido reiniciadas a las predeterminadas.');
  }
}
