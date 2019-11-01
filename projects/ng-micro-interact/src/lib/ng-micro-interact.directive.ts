import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {NgMicroInteractFactory} from './ng-micro-interact-factory';

@Directive({
  selector: '[ngMicroInteract]'
})
export class NgMicroInteractDirective implements AfterViewInit {

  @Input() type = 'fade';
  @Input() trigger = 'mouseover';
  @Input() options: KeyframeAnimationOptions;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.registerEventListeners();
  }

  registerEventListeners() {
    this.renderer.listen(this.el.nativeElement, this.trigger, () => {
      NgMicroInteractFactory.setInteraction(this.type, this.el, this.options);
    });
  }

}
