import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  btn_click="Not Clicked";
  onButtonClick(){
      this.btn_click="Clicked";
  }

}
