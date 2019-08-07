import { Component } from '@angular/core';
import { DsConfig, TopbarPosition } from '@piros/dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config: DsConfig = {
    routes: [
      { path: '/', title: 'Home', faIcon: 'fas fa-home' },
      { title: 'About', onClick: (route) => console.log(route) },
      { path: '/login', title: 'Login', topbarPosition: TopbarPosition.RIGHT },
      { title: 'Register', topbarPosition: TopbarPosition.RIGHT, onClick: (route) => console.log(route) },
      { path: '/hidden', title: 'Hidden', topbarPosition: TopbarPosition.RIGHT, show: ()=>false },
    ]
  }
  
}
