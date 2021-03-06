import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Blink implements NgMicroInteract {

  readonly keyframes: Keyframe[] = [
    { transform: 'scale(1)'},
    { transform: 'scale(0.93)' },
    { transform: 'scale(0.95)' },
    { transform: 'scale(0.91)' },
    { transform: 'scale(1)' }];

  start(elementRef: ElementRef, { duration }) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
