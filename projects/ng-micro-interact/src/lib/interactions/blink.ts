import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Blink implements NgMicroInteract {

  start(elementRef: ElementRef) {
    const keyframes = [
      { transform: 'scale(1)'},
      { transform: 'scale(0.93)' },
      { transform: 'scale(0.95)' },
      { transform: 'scale(0.91)' },
      { transform: 'scale(1)' }];
    elementRef.nativeElement.animate( keyframes, { duration: 3000});
  }
}
