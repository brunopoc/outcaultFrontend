// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Store } from 'redux';

declare module 'redux' {
    export interface Store extends Store {
        sagaTask: any;
    }
}
