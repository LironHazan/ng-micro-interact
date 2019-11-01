import {ElementRef} from '@angular/core';
import {Blink} from './interactions/blink';

const INTERACTION_TYPES = {
    blink: Blink
};

export class NgMicroInteractFactory {
    static setInteraction(type: string, element: ElementRef) {
      return new INTERACTION_TYPES[type]()
        .start(element);
    }
}
