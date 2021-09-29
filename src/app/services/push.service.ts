import { Injectable } from '@angular/core';
// import { OneSignal } from '@ionic-native/onesignal/ngx';


@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(
    // private afMessaging: AngularFireMessaging
    ) { }

  configuracionInicial() {
    // //b2f7f966-d8cc-11e4-bed1-df8f05be55ba
    // this.oneSignal.startInit('f18b8a43-5de5-4798-be29-62bb587f1a7a', '239273328008');

    // this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    // this.oneSignal.handleNotificationReceived().subscribe((notificacion) => {
    // // do something when notification is received
    //   console.log('Notificación Recibida', notificacion);
      
    // });

    // this.oneSignal.handleNotificationOpened().subscribe((notificacion) => {
    //   // do something when a notification is opened
    //   console.log('Notificación Abierta', notificacion);
    // });

    // this.oneSignal.endInit();
  
  }

}
