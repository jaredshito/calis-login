import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthProvider } from '../providers/auth/auth';

import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FIREBASE_CONFIG} from "./app.firebase.configure"
import { HomePage } from '../pages/home/home';



@NgModule({
  declarations: [
    MyApp,
    HomePage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(FIREBASE_CONFIG),
   AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
