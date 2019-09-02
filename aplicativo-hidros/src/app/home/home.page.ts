import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


alerta(){
  console.log(this.newMethod());
 }

  private newMethod(): any {
    return "o botão foi pressionado";
  }
}