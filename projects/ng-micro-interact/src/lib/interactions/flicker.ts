import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Flicker implements NgMicroInteract {

  readonly keyframes: Keyframe[] = [
    { transform: 'skewX(0deg)'},
    { transform: 'skewX(10deg)'},
    { transform: 'skewX(-10deg)'},
    { transform: 'skewX(5deg)'},
    { transform: 'skewX(-5deg)'},
    { transform: 'skewX(0deg)'},
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
