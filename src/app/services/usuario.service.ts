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

    console.log(this.storage.get('email'));

    
     
  }

  register(email: string, nombre: string, password: string) {

    this.storage.set('email', email);
    this.storage.set('nombre', nombre);
    this.storage.set('password', password);
    console.log(this.storage.keys);
     
  }
}
