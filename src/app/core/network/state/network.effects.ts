import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';

import {map, mapTo} from 'rxjs/operators';
import {fromEvent, merge, of} from 'rxjs';

import * as NetworkActions from './network.actions';


@Injectable()
export class NetworkEffects {


  online = createEffect(() => merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false)),
    ).pipe(map((online) => (online ? NetworkActions.deviceWentOnline() : NetworkActions.deviceWentOffline()))));


  constructor(private actions$: Actions) {}

}
