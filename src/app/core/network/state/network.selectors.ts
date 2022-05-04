import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromNetwork from './network.reducer';

export const selectNetworkState = createFeatureSelector<fromNetwork.State>(fromNetwork.networkFeatureKey);

export const selectIsDeviceOnline = createSelector(selectNetworkState, (state) => state.isDeviceOnline);
