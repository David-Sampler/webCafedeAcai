import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { Image } from '../model/imagem.model';

@Component({
  selector: 'app-slidefotos',
  templateUrl: './slidefotos.component.html',
  styleUrls: ['./slidefotos.component.css']
})
export class SlidefotosComponent implements OnInit {

  @Input()images: Array<Image> = [];

  @Input() selectedImage:number = 0;

  @Output() closeCarrousel = new EventEmitter<void>();

  public animState = 'middle'
  public animeImage:number = 0

  constructor() { }

  ngOnInit(): void {
    this.animeImage = this.selectedImage
  }

  public close(): void{
    this.closeCarrousel.emit()
  }

  public previous():void{
    this.animState = 'left'
    this.selectedImage = this.selectedImage > 0 ? this.selectedImage -1 : this.images.length -1
    this.blur()
  }

  public next():void{
    this.animState = 'right'
    this.selectedImage = this.selectedImage < this.images.length -1 ? this.selectedImage +1 : 0;
    this.blur()
  }

public animeDone():void{
 this.animeImage = this.selectedImage
 this.animState = 'middle'

}

public onEvent(event:Event){
  event.stopPropagation();
}

  private blur():void{

    const activeElement = document.activeElement as HTMLElement
    if(activeElement !== null){
      activeElement.blur()
    }

  }
}
