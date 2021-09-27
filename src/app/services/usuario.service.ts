import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private storage: Storage,
    private navCtrl: NavController
    ) { }

  
  async login(email: string, password: string) {

    
     let emailSotrage = await this.storage.get('email');
     let passwordSotrage = await this.storage.get('password');     
    
    return new Promise( resolve => {

      if (email == emailSotrage  && password == passwordSotrage) {
        
        resolve(true);
      } else {
        
        resolve(false);
      }

    });

    
     
  }

  register(email: string, nombre: string, password: string) {
    return new Promise( resolve => {
      try {
        this.storage.set('email', email);
        this.storage.set('nombre', nombre);
        this.storage.set('password', password);
        resolve(true);
      } catch (error) {
        resolve(false);
      }
    });
      
  }

  logout() {
   
    // this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
    
 }

}
