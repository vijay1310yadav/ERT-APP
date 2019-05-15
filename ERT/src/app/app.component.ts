import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  showSplash: boolean = true;
  alertShown: boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController
  ) {
    this.initializeApp();
    timer(3000).subscribe(() => this.showSplash = false)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.platform.backButton.subscribe(() => {
        console.log('exit');
        navigator['app'].exitApp();
      })
    });
  };

  presentConfirm() {
    let alert = this.alertCtrl.create({
      header: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown = false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            navigator['app'].exitApp();
          }
        }
      ]
    });
  }


}

