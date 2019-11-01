import {INTERACTION_TYPES} from './interactions/ng-micro-interactions';
import {ElementRef} from '@angular/core';

export class NgMicroInteractFactory {
    static setInteraction(type: string, element: ElementRef) {
      return new INTERACTION_TYPES[type]()
        .start(element);
    }
}
