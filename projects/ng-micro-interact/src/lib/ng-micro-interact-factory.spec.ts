
import { NgMicroInteractFactory } from './ng-micro-interact-factory';
import { ElementRef } from '@angular/core';
import {Blink} from './interactions/blink';

describe('NgMicroInteractFactory', () => {
  const factory = NgMicroInteractFactory;
  const elRef: ElementRef = { nativeElement: {}};
  const blinkInstance: Blink = factory.setInteraction('blink', elRef, { duration: 3000 });

  it('should be created', () => {
    expect(blinkInstance.start).toBeTruthy();
    expect(blinkInstance.keyframes).toBeTruthy();
  });
});
