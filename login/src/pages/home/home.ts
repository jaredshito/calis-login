import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams,public authData: AuthProvider) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data=> {
    if(data && data.email && data.uid){
    
      this.toast.create({
        message: `Welcome to eat-time , ${data.email}`,
        duration: 3000
      }).present();
    }
    else{
      this.toast.create({
        message: 'El correo o el email son incorrectos',
        duration: 3000
      }).present();
        }
    });
  
  
}
logout(){
  this.authData.logoutUser().then(authData =>{this.navCtrl.setRoot('LoginPage')});
}
}
