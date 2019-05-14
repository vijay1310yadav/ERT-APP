import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  public async presentLoading(): Promise<HTMLIonLoadingElement> {
    this.loader = await this.loadingCtrl.create({

      translucent: true
    });
    this.loader.present();

    return this.loader;

  }

  public dismissLoading() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }
}
