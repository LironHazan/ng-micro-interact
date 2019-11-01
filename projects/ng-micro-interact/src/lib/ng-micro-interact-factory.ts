import {ElementRef} from '@angular/core';
import {Blink} from './interactions/blink';
import {Bounce} from './interactions/bounce';
import {defaultDuration} from './consts';
import { InteractionType } from './ng-micro-interact.types';
import {Fade} from './interactions/fade';
import {Flicker} from './interactions/flicker';
import {Groove} from './interactions/groove';
import {Jelly} from './interactions/jelly';
import {Jerk} from './interactions/jerk';
import {Pop} from './interactions/pop';
import {Shake} from './interactions/shake';
import {Squeeze} from './interactions/squeeze';
import {Swing} from './interactions/swing';
import {Tada} from './interactions/tada';

const INTERACTION_TYPES: InteractionType = {
    blink: Blink,
    bounce: Bounce,
    fade: Fade,
    flicker: Flicker,
    groove: Groove,
    jelly: Jelly,
    jerk: Jerk,
    pop: Pop,
    shake: Shake,
    squeeze: Squeeze,
    swing: Swing,
    tada: Tada
};

export class NgMicroInteractFactory {
    static setInteraction(type: string, element: ElementRef, options: KeyframeAnimationOptions) {
      return new INTERACTION_TYPES[type]()
        .start(element, { ...{ duration: defaultDuration }, ...options });
    }
}
