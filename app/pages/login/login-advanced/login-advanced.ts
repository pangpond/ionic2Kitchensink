import {FORM_DIRECTIVES, FormBuilder, Validators, Control, ControlGroup} from 'angular2/common';
import {Page} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/login/login-advanced/login-advanced.html',
  providers: [FormBuilder]
})
export class LoginAdvancedPage {
  form;

  constructor() {
  }

  processForm(event) {
    // TODO: display input in a popup
    console.log(event);
  }

}
