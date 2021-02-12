import { Middleware } from './middleware';
import { ActionType } from '../action-types';

let timer: any;
export const bundlerMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  console.log(action);
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log('Timer expired.');
  }, 750);
};
