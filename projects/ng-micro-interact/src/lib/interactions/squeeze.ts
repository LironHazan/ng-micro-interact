import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Squeeze implements NgMicroInteract {

  keyframes: Keyframe[] = [
    {  transform: 'scaleY(1)' },
    {  transform: 'scaleY(0.95)' },
    {  transform: 'scaleY(0.9)' },
    {  transform: 'scaleY(0.75)' },
    {  transform: 'scaleY(1.3)' },
    {  transform: 'scaleY(0.95)' },
    {  transform: 'scaleY(1)' },
  ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
