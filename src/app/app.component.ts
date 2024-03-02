import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Look at me!';
  value = 50;
  //Add new method to return hello message
  clickIncBut(){
this.value = this.value + 1;
  }
  clickDecBut(){
this.value = this.value - 1;
  }
}
