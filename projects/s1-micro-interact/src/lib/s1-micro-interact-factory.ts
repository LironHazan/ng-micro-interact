import {INTERACTION_TYPES} from './s1-micro-interact-consts';
import {ElementRef} from '@angular/core';

export class S1MicroInteractFactory {
    static setInteraction(type: string, element: ElementRef) {
      return new INTERACTION_TYPES[type]()
        .start(element);
    }
}
