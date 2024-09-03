import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  citas: { frase: string; autor: string }[] = [];

  constructor() {
    this.cargarCitas();
  }

  async cargarCitas() {
    const { value } = await Preferences.get({ key: 'citas' });
    this.citas = value ? JSON.parse(value) : [
        {
            "frase": "¡Cómo va eso!",
            "autor": "Joey Tribbiani, Friends"
        },
        {
            "frase": "Yo soy el que llama.",
            "autor": "Walter White, Breaking Bad"
        },
        {
            "frase": "¡Estábamos en un descanso!",
            "autor": "Ross Geller, Friends"
        },
        {
            "frase": "No soy supersticioso, pero sí un poco sticioso.",
            "autor": "Michael Scott, The Office"
        },
        {
            "frase": "¡Bazinga!",
            "autor": "Sheldon Cooper, The Big Bang Theory"
        },
        {
            "frase": "¡Al infinito y más allá!",
            "autor": "Buzz Lightyear, Toy Story"
        },
        {
            "frase": "¡D'oh!",
            "autor": "Homer Simpson, Los Simpson"
        },
        {
            "frase": "Quiero creer.",
            "autor": "Fox Mulder, Los Expedientes Secretos X"
        },
        {
            "frase": "Se acerca el invierno.",
            "autor": "Ned Stark, Juego de Tronos"
        },
        {
            "frase": "¡Eso dijo ella!",
            "autor": "Michael Scott, The Office"
        }
    ];
  }

  async guardarCitas() {
    await Preferences.set({
      key: 'citas',
      value: JSON.stringify(this.citas),
    });
  }

  obtenerCitaAleatoria() {
    const indice = Math.floor(Math.random() * this.citas.length);
    return this.citas[indice];
  }

  async agregarCita(cita: { frase: string; autor: string }) {
    this.citas.push(cita);
    await this.guardarCitas();
  }

  async eliminarCita(cita: { frase: string; autor: string }) {
    this.citas = this.citas.filter(c => c !== cita);
    await this.guardarCitas();
  }

  // Para limpiar la base de citas
  async limpiarCitas() {
    this.citas = [];
    await this.guardarCitas();

    const nuevasCitas = [
      { frase: "Cómo va eso!", autor: "Joey Tribbiani, Friends" },
      { frase: "Yo soy el que llama.", autor: "Walter White, Breaking Bad" },
      { frase: "Estábamos en un descanso!", autor: "Ross Geller, Friends" },
      { frase: "No soy supersticioso, pero sí un poco sticioso.", autor: "Michael Scott, The Office" },
      { frase: "Bazinga!", autor: "Sheldon Cooper, The Big Bang Theory" },
      { frase: "Al infinito y más allá!", autor: "Buzz Lightyear, Toy Story" },
      { frase: "D'oh!", autor: "Homer Simpson, Los Simpson" },
      { frase: "Quiero creer.", autor: "Fox Mulder, Los Expedientes Secretos X" },
      { frase: "Se acerca el invierno.", autor: "Ned Stark, Juego de Tronos" },
      { frase: "Eso dijo ella!", autor: "Michael Scott, The Office" }
    ];

    for (const cita of nuevasCitas) {
      await this.agregarCita(cita);
    }
  }
}
