import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementStyler]'
})
export class ElementStylerDirective {

  constructor(public element: ElementRef, public renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(event: Event){
    // this.element.nativeElement.style.backgroundColor = 'orange';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'orange');
  }
}
