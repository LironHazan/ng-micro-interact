import { ElementRef } from '@angular/core';
import { S1MicroInteract } from './s1-micro-interact.interface';

export class Blink implements S1MicroInteract {

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
