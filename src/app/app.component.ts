import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigationChoice: string = ''
  
  navigate(choice) {
    this.navigationChoice = choice;
  }
}
