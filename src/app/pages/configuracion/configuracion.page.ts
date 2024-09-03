import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../../services/configuracion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  eliminarCitasInicio: boolean = false;

  constructor(
    private configuracionService: ConfiguracionService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.eliminarCitasInicio = await this.configuracionService.obtenerConfiguracion('eliminarCitasInicio');
  }

  guardarConfiguracion() {
    this.configuracionService.guardarConfiguracion('eliminarCitasInicio', this.eliminarCitasInicio);
  }

  irAPaginaPrincipal() {
    window.location.href = '/citas';
  }
}
