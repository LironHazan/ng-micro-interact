import {INTERACTION_TYPES} from './interactions/s1-micro-interactions';
import {ElementRef} from '@angular/core';

export class S1MicroInteractFactory {
    static setInteraction(type: string, element: ElementRef) {
      return new INTERACTION_TYPES[type]()
        .start(element);
    }
}
