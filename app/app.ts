import 'es6-shim';
import {App, IonicApp, Platform, Storage, LocalStorage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {IntroPage} from './pages/intro/intro';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {TabsPage} from './pages/tabs/tabs';
import {ListPage} from './pages/list/list';
import {LoginPage} from './pages/login/login';


@App({
  // template: '<ion-nav [root]="rootPage"></ion-nav>',
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = GettingStartedPage;
  pages: Array<{ title: string, component: any }>;
  local: any;

  constructor(private app: IonicApp, private platform: Platform) {

    this.local = new Storage(LocalStorage);
    this.local.get('introShown').then((result) => {
      if (result) {
        this.rootPage = GettingStartedPage;
      } else {
        this.local.set('introShown', true);
        this.rootPage = IntroPage;
      }
    });

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Getting Started', component: GettingStartedPage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
