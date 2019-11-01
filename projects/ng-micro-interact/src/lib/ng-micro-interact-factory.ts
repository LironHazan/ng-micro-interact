import {ElementRef} from '@angular/core';
import {Blink} from './interactions/blink';
import {Bounce} from './interactions/bounce';
import {defaultDuration} from './consts';
import {InteractionType} from './ng-micro-interact.types';

const INTERACTION_TYPES: InteractionType = {
    blink: Blink,
    bounce: Bounce
};

export class NgMicroInteractFactory {
    static setInteraction(type: string, element: ElementRef, options: KeyframeAnimationOptions) {
      return new INTERACTION_TYPES[type]()
        .start(element, { ...{ duration: defaultDuration }, ...options });
    }
}
