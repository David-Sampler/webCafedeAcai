import { Component, OnInit } from '@angular/core';
import { Image } from '../model/imagem.model'
@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

   imagem = [
    {
      url: "../assets/FOTOSEDIT/FOTO-MENINA2.jpg",
      texto: "Nossa indiazinha propaganda em uma de nossas lojas"

    },
    {
      url: "../assets/FOTOSEDIT/01.jpg",
      texto:"Visita na plantação de açai"
    },
    {
      url: "../assets/FOTOSEDIT/02.jpg",
      texto:"Nossa indiazinha propaganda"
    },
    {
      url: "../assets/FOTOSEDIT/05.jpg",
      texto:"Nossa indiazinha propaganda"
    },

    {
      url: "../assets/FOTOSEDIT/04.jpg",
      texto:"Nossa indiazinha propaganda"
    },


    {
      url: "../assets/FOTOSEDIT/cafe01.jpg",
      texto:"Nossa indiazinha propaganda"

    },
    {
      url: "../assets/FOTOSEDIT/cafe02.jpg",
      texto:"Nossa indiazinha propaganda"

    },
    {
      url: "../assets/FOTOSEDIT/FOTO-MENINA.jpg",
      texto:"Nossa indiazinha propaganda"

    },
    {
      url: "../assets/FOTOSEDIT/ACAIZEIRO.jpg",
      texto:"Nossa indiazinha propaganda"

    },
    {
      url: "../assets/FOTOSEDIT/TACABO-QUEIMADO.jpg",
      texto:"Nossa indiazinha propaganda"

    },

    {
      url: "../assets/FOTOSEDIT/TABACOMOLE.jpg",
      texto:"Nossa indiazinha propaganda"

    },


    {
      url: "../assets/FOTOSEDIT/LOJAWILSON.jpg",
      texto:"Nossa indiazinha propaganda"

    },
 

  ] 

  img2 = [
    {
      url: "../assets/FOTOSEDIT/TABACOSECO.jpg",
    },
    {
      url: "../assets/FOTOSEDIT/EQUIPE.jpg",
    },
    {
      url: "../assets/FOTOSEDIT/PRODUTO.jpg",
      texto:"Nossa indiazinha propaganda"

    },
    {
      url: "../assets/FOTOSEDIT/PO.jpg",
      texto:"Nossa indiazinha propaganda"

    }
  ]

  constructor() { }

  ngOnInit(): void {


  }
}