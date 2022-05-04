import {createAction} from '@ngrx/store';

export const deviceWentOnline = createAction('[Network] Device went online');
export const deviceWentOffline = createAction('[Network] Device went offline');
