import {ElementRef} from '@angular/core';
import {Blink} from './interactions/blink';
import {Bounce} from './interactions/bounce';
import {defaultDuration} from './consts';

const INTERACTION_TYPES = {
    blink: Blink,
    bounce: Bounce
};

export class NgMicroInteractFactory {
    static setInteraction(type: string, element: ElementRef, options) {
      return new INTERACTION_TYPES[type]()
        .start(element, { ...{ duration: defaultDuration }, ...options });
    }
}
