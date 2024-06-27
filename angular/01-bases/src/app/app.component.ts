import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy():void {
    this.counter += 1
  }

  decreaseBy():void {
    this.counter -= 1
  }

  reset():void {
    this.counter = 10;
  }
}
