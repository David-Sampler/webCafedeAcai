import { Component, OnInit } from '@angular/core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  //faCoffee = faCoffee
  constructor() { }

  ngOnInit(): void {
  }

  

}
