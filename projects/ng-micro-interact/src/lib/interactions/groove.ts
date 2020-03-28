import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Groove implements NgMicroInteract {

  readonly keyframes: Keyframe[] = [
    { transform: 'skewY(0deg) rotate(0deg)'},
    { transform: 'skewY(-10deg) rotateZ(8deg)'},
    { transform: 'skewY(10deg) rotateZ(-8deg)'},
    { transform: 'skewY(6deg) rotateZ(4deg)'},
    { transform: 'skewY(0deg) rotate(0deg)'},
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
