import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import { AuthService } from '../services/auth.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProdutoService } from './../services/produtos';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutoPage } from '../pages/produto/produto';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ContactPage } from '../pages/contact/contact';
import { ContactFormService } from './../services/contact-form.service';
import { ThankyouPage } from '../pages/thankyou/thankyou';

@NgModule({
	declarations: [ MyApp, HomePage, ListPage, LoginPage, ContactPage, ThankyouPage, ProdutoPage ],
	imports: [ BrowserModule, HttpClientModule, IonicStorageModule.forRoot(), IonicModule.forRoot(MyApp) ],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage, ListPage, LoginPage, ContactPage, ThankyouPage, ProdutoPage ],
	providers: [
		StatusBar,
		SplashScreen,
		ContactFormService,
		ProdutoService,
		AuthService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {}
