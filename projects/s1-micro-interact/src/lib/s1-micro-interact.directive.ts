import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {S1MicroInteractFactory} from './s1-micro-interact-factory';

@Directive({
  selector: '[soMicroInteract]'
})
export class S1MicroInteractDirective implements AfterViewInit {

  @Input() type;
  @Input() trigger = 'mouseover';

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.registerEventListeners();
  }

  registerEventListeners() {
    this.renderer.listen(this.el.nativeElement, this.trigger, () => {
      S1MicroInteractFactory.setInteraction(this.type, this.el);
    });
  }

}
