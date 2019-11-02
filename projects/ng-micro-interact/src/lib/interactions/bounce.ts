import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Bounce implements NgMicroInteract {

  readonly keyframes: Keyframe[] = [
    {  transform: 'translate(0, 0)'},
    {  transform: 'translate(0, 3px)'},
    {  transform: 'translate(0, -6px)'},
    {  transform: 'translate(0, 3px)'},
    {  transform: 'translate(0, 0)'},
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
