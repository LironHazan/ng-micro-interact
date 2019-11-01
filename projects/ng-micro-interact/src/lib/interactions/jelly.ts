import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Jelly implements NgMicroInteract {

  keyframes: Keyframe[] = [
    {  transform: 'scaleX(1)' },
    {  transform: 'scaleX(0.9)' },
    {  transform: 'scaleX(1.25)' },
    {  transform: 'scaleX(0.8)' },
    {  transform: 'scaleX(1)' }
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
