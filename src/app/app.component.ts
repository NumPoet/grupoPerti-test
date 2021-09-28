import { Component } from '@angular/core';
import { PushService } from './services/push.service';
import { Platform } from '@ionic/angular';
// import OneSignal from 'onesignal-cordova-plugin';
// import { OneSignalService } from 'onesignal-ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  OneSignalInit

  constructor(
    private platform: Platform, 
    // private oneSignal: OneSignalService
  ) {


  
    this.initializeApp();
    
  }

 

  initializeApp() {

    this.platform.ready().then(() => {
      // this.oneSignal.init({
      //   appId: "f18b8a43-5de5-4798-be29-62bb587f1a7a",
      // });
      // OneSignalInit();
      // this.pushService.configuracionInicial();
    });
  }


   


}
// // Call this function when your app starts
// function OneSignalInit(): void {
//   // Uncomment to set OneSignal device logging to VERBOSE  
//   // OneSignal.setLogLevel(6, 0);

//   // NOTE: Update the setAppId value below with your OneSignal AppId.
//   OneSignal.setAppId("YOUR_ONESIGNAL_APP_ID");
//   OneSignal.setNotificationOpenedHandler(function(jsonData) {
//       console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
//   });

//   // iOS - Prompts the user for notification permissions.
//   //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
//   OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
//       console.log("User accepted notifications: " + accepted);
//   });
// }