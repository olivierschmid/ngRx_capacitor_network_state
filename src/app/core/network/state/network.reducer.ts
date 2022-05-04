import {createReducer, on} from '@ngrx/store';
import * as NetworkActions from './network.actions';

export const networkFeatureKey = 'network';

export interface State {
  isDeviceOnline: boolean;
}

export const initialState: State = {
  isDeviceOnline: true
};

export const reducer = createReducer(
  initialState,
  on(NetworkActions.deviceWentOnline, (state): State => ({...state, isDeviceOnline: true})),
  on(NetworkActions.deviceWentOffline, (state): State => ({...state, isDeviceOnline: false}))
);
