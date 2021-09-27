import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private storage: Storage
    ) { }

  
  login(email: string, password: string) {

    const data = {email, password };

  }
}
