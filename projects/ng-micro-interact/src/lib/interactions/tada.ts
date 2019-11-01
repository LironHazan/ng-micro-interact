import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Tada implements NgMicroInteract {

  keyframes: Keyframe[] = [
    {  transform: 'scale(1)' },
    {  transform: 'scale(1.1) rotate(3deg)' },
    {  transform: 'scale(0.97)' },
    {  transform: 'scale(0.99) rotate(-3deg)' },
    {  transform: 'scale(1.05)' },
    {  transform: 'scale(1)' },
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
