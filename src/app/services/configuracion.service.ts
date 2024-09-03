import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {
  constructor() {}

  async guardarConfiguracion(key: string, value: any) {
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  }

  async obtenerConfiguracion(key: string): Promise<any> {
    const { value } = await Preferences.get({ key });
    return value ? JSON.parse(value) : false;
  }
}
