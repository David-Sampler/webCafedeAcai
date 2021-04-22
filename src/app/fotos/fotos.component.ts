import { Component, OnInit } from '@angular/core';
import {Image} from '../model/imagem.model'
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

   public imagem = [
     {
       url:  "../assets/FOTOSEDIT/01.jpg",
    
     },
     {
      url:  "../assets/FOTOSEDIT/02.jpg",
    },
    {
      url:  "../assets/FOTOSEDIT/05.jpg",
    },

    {
      url:  "../assets/FOTOSEDIT/04.jpg",
    },


    {
      url:  "../assets/FOTOSEDIT/cafe01.jpg",
    },
    {
      url:  "../assets/FOTOSEDIT/cafe02.jpg",
    },

  


   ] as Array<Image>


  constructor() { }

  ngOnInit(): void {
    

}
}