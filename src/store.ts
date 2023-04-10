import { extendObservable } from 'mobx';
import { StoreAuthStatus } from './app/Store/Auth';

export const rootStore = extendObservable({ StoreAuthStatus }, {});
