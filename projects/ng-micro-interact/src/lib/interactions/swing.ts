import { ElementRef } from '@angular/core';
import { NgMicroInteract } from './ng-micro-interact.interface';

export class Swing implements NgMicroInteract {

  keyframes: Keyframe[] = [
    {  transform: 'rotateZ(0deg)' },
    {  transform: 'rotateZ(15deg)' },
    {  transform: 'rotateZ(-15deg)' },
    {  transform: 'rotateZ(7deg)' },
    {  transform: 'rotateZ(-7deg)' },
    {  transform: 'rotateZ(0deg)' },
    ];

  start(elementRef: ElementRef, { duration }: KeyframeAnimationOptions) {
    elementRef.nativeElement.animate( this.keyframes, { duration });
  }
}
