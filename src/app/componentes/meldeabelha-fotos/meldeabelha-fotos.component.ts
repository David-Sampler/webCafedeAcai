import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meldeabelha-fotos',
  templateUrl: './meldeabelha-fotos.component.html',
  styleUrls: ['./meldeabelha-fotos.component.css']
})
export class MeldeabelhaFotosComponent implements OnInit {

  constructor() { }

  fotos:any = ['../assets/MEL01.jpg','../assets/MEL02.jpg']

  ngOnInit(): void {
  }

}
