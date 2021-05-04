import {setupWorker} from 'msw';
import {handlers} from "./handlers";

/* worker which is initialized in index.js and provides MSW features **/
export const worker = setupWorker(...handlers);