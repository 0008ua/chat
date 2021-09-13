import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SocketEffects } from './socket.effects';

describe('SocketEffects', () => {
  let actions$: Observable<any>;
  let effects: SocketEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SocketEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SocketEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
