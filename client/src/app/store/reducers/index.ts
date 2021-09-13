import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromSocket from './socket.reducer';
import * as fromApp from './app.reducer';

export interface State {
    user: fromUser.State;
    socket: fromSocket.State;
    app: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
    user: fromUser.reducer,
    socket: fromSocket.reducer,
    app: fromApp.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
