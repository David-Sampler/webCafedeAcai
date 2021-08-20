import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enderecos',
  templateUrl: './enderecos.component.html',
  styleUrls: ['./enderecos.component.css']
})
export class EnderecosComponent implements OnInit {

  
  infor = [
    {
      link:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.131934705467!2d-48.5039061!3d-1.454391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48f70a16addd5%3A0x75fcb25a0461a4a8!2sTabacaria%20Wilson%20Ver-o-peso!5e0!3m2!1spt-BR!2sbr!4v1617643818906!5m2!1spt-BR!2sbr",
      titulo:"Ver-o-peso",
      end:"AVENIDA, Tv. Marquês de Pombal Belém - PA, Cep:66020-390",
      contato:"(91)99274 - 6537 / 3121 - 7903",
      link2:"https://goo.gl/maps/PHVEyq3789aA8E7k7"

    },
    {
      link:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.701589894075!2d-48.40275513782451!3d-1.355643135691204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a4600b4a63b09d%3A0x7e953fd5745c32dc!2sTabacaria%20Wilson!5e0!3m2!1spt-BR!2sbr!4v1617646465146!5m2!1spt-BR!2sbr",
      titulo:"Ananindeua",
      end:"Tv. SN 18, 1242-1292 - Coqueiro, Ananindeua - PA, 67133-260",
      contato:"(91)3263 - 1415 / 98931 - 3386",
      link2:"https://goo.gl/maps/hPPCUqpa1MyQpCBA7"

    },
    {
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0189450392018!2d-48.89038108524548!3d-1.7208311987452127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNDMnMTUuMCJTIDQ4wrA1MycxNy41Ilc!5e0!3m2!1spt-BR!2sbr!4v1617647255622!5m2!1spt-BR!2sbr" ,
      titulo:"Abaetetuba",
      end:"R. Barão do Rio Branco, 1836 - Cafezal, Abaetetuba - PA, 68440-000",
      contato:"(91) 99214 - 1798",
      link2:"https://goo.gl/maps/YbA9mu3ki4CwSp2H6"
     
    },

    {
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.143650697689!2d-46.764011285246305!3d-1.053689799231387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDMnMTMuMyJTIDQ2wrA0NSc0Mi42Ilc!5e0!3m2!1spt-BR!2sbr!4v1617647918372!5m2!1spt-BR!2sbr" ,
      titulo:"Bragança",
      end:"R.Cel. José Caetano Ribeiro, 280-Centro, Bragança-PA, 68600-000",
      contato:"(91)99816 - 7150 / 99389 - 9811",
      link2:"https://goo.gl/maps/HN6pCDb5DmdM1RPk6"
     
    },
    
    {
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.429091844965!2d-48.96562718524529!3d-1.9829491985543701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTgnNTguNiJTIDQ4wrA1Nyc0OC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1617648163708!5m2!1spt-BR!2sbr" ,
      titulo:"Igarapé Miri",
      end:"R. Lauro Sodré, 1099-989, Igarapé-Mirí-PA, 68430-000",
      contato:"(91)99282 - 9547",
      link2:"https://goo.gl/maps/PYyHYPrxnnbQdZ239"
     
    },
    {
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4962053196728!2d-48.49623298524581!3d-1.4750531989242601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjgnMzAuMiJTIDQ4wrAyOSczOC42Ilc!5e0!3m2!1spt-BR!2sbr!4v1617648416630!5m2!1spt-BR!2sbr" ,
      titulo:"Jurunas",
      end:"R. Eng. Fernando Guilhon, 77 - Jurunas, Belém - PA, 66025-637",
      contato:"(91) 99325 - 9146)",
      link2:"https://goo.gl/maps/nWryWjcFhgH4v6k27"
     
    },
    {
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.618213390179!2d-48.43604588524603!3d-1.4053416989750518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjQnMTkuMiJTIDQ4wrAyNicwMS45Ilc!5e0!3m2!1spt-BR!2sbr!4v1617894624412!5m2!1spt-BR!2sbr" ,
      titulo:"Entroncamento",
      end:"Rodovia BR 316 km01 - Castanheira, Belém - PA, 66645-001",
      contato:"(91) 98069 - 4375 / 3238 - 9355",
      link2:"https://goo.gl/maps/1RUvEZfN56gNarQE6"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
