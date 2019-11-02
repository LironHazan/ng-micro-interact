[![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=0.1&x2=0)](https://www.npmjs.com/package/ng-micro-interact)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/LironHazan/ng-micro-interactions/blob/master/LICENSE)


# ng-micro-interact
Tiny Angular lib for micro interactions using the modern [web animations](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) (experimental!) API.
Inspired by [micronjs](https://webkul.github.io/micron/docs.html#!).

![](captured.gif)

[Hit The Demo](https://ng-micro-interact-demo.stackblitz.io/) 

Using ng-micro-interact will give you:
- Types.
- Excellent/Best performance

Web Animation API It is one of the most performant ways to animate on the Web **where supported**, letting the browser make its own internal optimizations without hacks, coercion, or Window.requestAnimationFrame(). 

Easily add micro interactions as follows:

`np i ng-micro-interact`

```ts
import { NgMicroInteractModule } from 'ng-micro-interact'
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgMicroInteractModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

```html 
    <div class="sq" ngMicroInteract 
                 [type]="'blink'" 
                 [options]="{ duration: 2000}" 
                 [trigger]="'mouseover'">  Blink! </div>
```


## API:
### Inputs: 

#### [type]
Optional, string - if won't be specified the default be 'fade'
Could be one of the following:
    blink,
    bounce,
    fade,
    flicker,
    groove,
    jelly,
    jerk,
    pop,
    shake,
    squeeze,
    swing,
    tada
   
#### [trigger]
Optional, string, Event name, if won't be specified the default be 'mouseover'

#### [options]
Optional, KeyframeAnimationOptions, if won't be specified the default be: { duration: 2000 }
