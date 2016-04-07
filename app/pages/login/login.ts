import {Page, IonicApp, NavController, NavParams} from 'ionic-angular';
import {Component} from "angular2/core";
// import {LoginSimplePage} from '../../pages/login/login-simple';
// import {LoginAdvancedPage} from '../../pages/login/login-advanced';

export * from './login-simple/login-simple';

import {LoginSimplePage} from './login-simple/login-simple';
import {LoginAdvancedPage} from './login-advanced/login-advanced';


@Page({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  pages: Array<{ title: string, component: any }>;

  constructor(private app: IonicApp, private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    this.pages = [
      { title: 'Simple Login', component: LoginSimplePage },
      { title: 'Advanced Login', component: LoginAdvancedPage }
    ];

  }

  openPage(event, page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }


}
