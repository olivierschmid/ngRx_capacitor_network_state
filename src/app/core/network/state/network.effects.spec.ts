import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NetworkEffects } from './network.effects';

describe('NetworkEffects', () => {
  let actions$: Observable<any>;
  let effects: NetworkEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NetworkEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NetworkEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
