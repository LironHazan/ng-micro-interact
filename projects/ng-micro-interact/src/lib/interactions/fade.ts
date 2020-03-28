import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Fade implements NgMicroInteract {

  readonly keyframes: Keyframe[] = [
    {  opacity: '1'},
    {  opacity: '0.6'},
    {  opacity: '0.8'},
    {  opacity: '1'},
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
