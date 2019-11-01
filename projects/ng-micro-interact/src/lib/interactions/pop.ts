import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Pop implements NgMicroInteract {

  keyframes: Keyframe[] = [
    {  transform: 'scaleX(1) scaleY(1)' },
    {  transform: 'scaleX(1.35) scaleY(0.1)' },
    {  transform: 'scaleX(0.8) scaleY(1.7)' },
    {  transform: 'scaleX(0.6) scaleY(0.85)' },
    {  transform: 'scaleX(1) scaleY(1)' },
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
