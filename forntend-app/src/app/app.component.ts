import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //one way data binding: declare a variable in component, display in html
  //two way data binding: declare a variable in component, display in html, if we change the variable in html, it should also change in component and vice versa

  message: any = "Hello Ziyech!!!"

  title = 'Football-app';
}