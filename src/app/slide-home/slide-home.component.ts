import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-slide-home',
  templateUrl: './slide-home.component.html',
  styleUrls: ['./slide-home.component.css']
})
export class SlideHomeComponent implements OnInit {
  images = ['../assets/BANNER3.jpg', '../assets/BANNER4.jpg', '../assets/BANNER1.jpg'];

  name = new FormControl('');
  email = new FormControl("")
  telefone = new FormControl("")
  texto = new FormControl("")



  fb: any = FormGroup

  texto1 = [
    {
      titulo: `Café de Açai`,
      principal: `É uma bebida de cor escura e avermelhada. Não é possível afirmar com certeza de quem é a invenção do
       café de Açaí da Amazônia, mas há alguns produtores no interior do estado do Pará entre eles o Empresário 
       Wilson Cunha natural de Igarapé Mirí, Município que fica 143 km de Belém. Ele nos conta que primeiro veio à 
       curiosidade de querer experimentar o sabor e comprovar se melhorava mesmo o seu índice glicêmico, o que teve 
       um surpreendente e fantástico resultado e a partir dai veio o interesse em comercializar.  O plantio e o cultivo 
      é todo artesanal no sitio Bom Jesus na vila de Mocajubinha no Município de terra alta a 105 km da Capital Belém.`,
      imagem: `assets/CAFE.jpg`
    }
  ]


  detalhes = [
    {
      titulo: "O Açai",
      texto: "O açaí é fruto típico da região norte, 90% da população o consome, seu aroma e sabor são inconfundíveis. Tem fama nacional e internacional por possuidor um verdadeiro arsenal de nutrientes (vitaminas A, E, D, K, B1, B2, C, minerais (cálcio, magnésio, potássio, ferro), aminoácidos, antioxidantes, óleos essenciais, além de ser excelente energético natural). Os seus poderosos nutrientes entre os quais FLAVONOIDES e os TANINOS ajudam a prevenir e controlar várias doenças",
      imagem: "assets/ACAI2.jpg "
    },
    {
      titulo: "Processo artesanal",
      texto: `Processo artesanal É preparado em uma maquinaestilo Moinho criada pelos próprios agricultores para torrar
       e limpar o café que leva algumas horas até chegar ao ponto, em seguida já com amêndoa torrada ele vai para a 
       máquina de moer até virar pó, depois é empacotado em embalagem de 500g.  e comercializado.`,
      imagem: "assets/MODO.jpg "
    },
    {
      titulo: "O Caroço do Açaí Auxilia na Saúde",
      texto: `Os seus poderosos nutrientes entre os quais FLAVONOIDES e os
       TANINOS ajudam a prevenir e controlar várias doenças. Segundo especialistas e
        nutricionistas o café de açaí controla a diabetes porque a  trava que ele dar no paladar é 
        ocasionada pelos TANINOS e seus componentes que diminuem a atividade da ALFA-AMILASE que é uma enzima 
        responsável pela digestão dos carboidratos, além do açaí ter bastantes fibras.  Na  amêndoa do caroço do açaí 
        está potencializada a substancia que é vasodilatadora e que permite o aumento do fluxo sanguíneo que é muito bom 
        para os pulmões porque o sangue fica circulando com maior facilidade e diminuindo também a hipertensão arterial. `,
      imagem: "assets/CARROCO.jpg "
    }
  ]

  Objetivos = [{
    quemsomos: `
    Somos a Tabacaria Wilson, estamos no mercado a mais de 30 anos oferecendo produtos 
    variados tanto no varejo quanto no atacado e representando as mais variadas Marcas com 
    destaque no cenário Nacional e internacional tendo como exemplo todos os produtos de qualidade 
    da Marca “Souza Cruz” e somos o único representante em todo o Pará garantindo suas compras 
    sem borocracia. Este ano de 2021, apesar de tantas situações adversas no Mundo, resolvemos 
    encarar mais um desafio, o de promover saúde, nos empenhamos e nos aprofundamos no Café de Açaí da Amazônia, 
    pesquisamos os seus efeitos, beneficios e propriedades artesanais que auxilia no tratamento da diabetes,
     combate o colesterol, trata a hipertensão e ainda previne o efisema pulmonar. Hoje você pode garantir o 
     seu café de Açaí da Amazônia em todas as lojas da Tabacria Wilson, entre em contato com a gente, todos os 
     nossos endereços você consegue aqui no nosso site. E vamos ser felizes com muita saúde, aguardamos a sua 
     visita e contato. Será um prazer recebe-los.
    `
  },
  {
    objetivos: `O açaí é fruto típico da região norte, 90% da população o consome, seu aroma e sabor são inconfundíveis. 
    Tem fama nacional e internacional por possuidor um verdadeiro arsenal de nutrientes (vitaminas A, E, D, K, B1, B2, C, 
      minerais (cálcio, magnésio, potássio, ferro), aminoácidos, antioxidantes, óleos essenciais, além de ser excelente energético natural). Os seus poderosos nutrientes entre os quais
       FLAVONOIDES e os TANINOS ajudam a prevenir e controlar várias doenças. Os batedores de açaí da região Norte costumam descartar os caroços no lixo após a batida para retirada do suco, mas é no caroço que está a 
       verdadeira riqueza do fruto. Segundo especialistas e a nutricionistas o controla da diabetes acontece devido a
        uma trava que ele dar no paladar, essa trava é ocasionada pelos TANINOS e seus componentes que diminuem a
         atividade da ALFA-AMILASE que é uma enzima responsável pela digestão dos carboidratos, além do açaí ter bastantes fibras.
         roço do açaí tem todos os benefícios do açaí in natura, só que no caroço dele está potencializado a substancia que
          é vasodilatadora e que permite o aumento do fluxo sanguíneo muito bom para os pulmões com o sangue circulando com maior facilidade e diminuindo também a hipertensão arterial. `
  }



  ]

  testemunhos = [
    {
      url: "../../assets/foto1.jpg",
      texto: `Olha gostei muito, andava a muito tempo com aminha glicemia alta demaisssss,
      comprei o café de açaí e acho que duas semanas melhorei bastante, de 204 fui para 88.`
    },
    {
      url: "../../assets/foto4.jpg",
      texto: "Parabéns ai pra quem inventou o café de açaí da Amazônia, rapaz é bom demais uai, recomendo viu, engraçado q logo no primeiro pacote que comprei na metade dele já tava me sentindo bem, comecei a respirar sem dificuldade."
    },
    {
      url: "../../assets/foto3.jpg",
      texto: "Fiquei no inicio desconfiado, tinha um amigo que começou a tomar e se deu bem, ai fui no embalo, fui lá e comprei,  meu colesterol melhorou, fiz os exames depois de um mês e td em ordem, antes tava feia a coisa. Vale a pena, obg."
    },
    {
      url: "../../assets/foto2.jpg",
      texto: "Amigos tinha pressão alta, vi uma matéria do café de açaí, aí fui comprar para experimentar, sinceramente é verdade mesmo, em pouco tempo minha pressão normalizou, me ajudou muiiiito."
    }
  ]


  constructor(private formulario: FormBuilder, private api: ApiService) {

    this.fb = this.formulario.group({
      nome: ["", Validators.required],
      contato: ["", Validators.required],
      email: ["", Validators.required],
      assunto: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.api.getmsg().subscribe((res) => {
      console.log(res)
    })
  }



  insert() {
    console.log(this.fb.value)

    this.api.postEmail(this.fb.value).subscribe((res) => {
      console.log(res)
      try {
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    })

    this.limparForm()
    alert("email enviado com sucesso")
  }


  limparForm() {
    this.fb.reset()
  }

}
