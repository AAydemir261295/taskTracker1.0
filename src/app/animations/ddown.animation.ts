import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

const slideIn = animation([
  style({ height: '0px', visibility: 'hidden' }),
  animate('0.15s linear'),
]);

const slideOut = animation([animate('0.15s linear'), style({ height: '0px' })]);

export const ddownAnimation = trigger('animeTrigger', [
  transition(':enter', [useAnimation(slideIn)]),
  transition(':leave', [useAnimation(slideOut)]),
]);
