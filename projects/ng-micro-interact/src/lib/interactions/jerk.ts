import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Jerk implements NgMicroInteract {

  readonly keyframes: Keyframe[] = [
    {  transform: 'translateX(0px) rotateZ(0deg)' },
    {  transform: 'translateX(-5px) rotateZ(-15deg)' },
    {  transform: 'translateX(5px) rotateZ(15deg)' },
    {  transform: 'translateX(-3px) rotateZ(5deg)' },
    {  transform: 'translateX(3px) rotateZ(-5deg)' },
    {  transform: 'translateX(0px) rotateZ(0deg)' },
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
