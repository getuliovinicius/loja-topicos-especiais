import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-thankyou',
	templateUrl: 'thankyou.html'
})
export class ThankyouPage {
	private token: string = '';

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.token = this.navParams.get('token');
		console.log('Getting token param:');
		console.log(this.token);
	}
}
