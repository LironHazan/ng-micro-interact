import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Shake implements NgMicroInteract {

  readonly keyframes: Keyframe[] = [
    {  transform: 'translateX(0px)' },
    {  transform: 'translateX(-3px)' },
    {  transform: 'translateX(3px)' },
    {  transform: 'translateX(-2px)' },
    {  transform: 'translateX(3px)' },
    {  transform: 'translateX(-2px)' },
    {  transform: 'translateX(0px)' },
  ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
