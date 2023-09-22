import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAquaEl]',
})
export class AquaElDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'aqua');
  }
}
