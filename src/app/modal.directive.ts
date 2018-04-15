import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {

  constructor( private el: ElementRef) { 
    this.el = el;
  }

  @HostListener("click") onclick(){
    this.makeModalVisible();
  }

  makeModalVisible (){
    this.el.nativeElement.style.display = "block";
  }

}


/* 
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}

*/