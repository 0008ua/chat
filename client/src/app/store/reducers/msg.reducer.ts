import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Msg } from '../../interfaces';
import { MsgActions, MsgActionTypes } from '../actions/msg.actions';

export const msgsFeatureKey = 'msgs';

export interface State extends EntityState<Msg> {
    // additional entities state properties
}

export const adapter: EntityAdapter<Msg> = createEntityAdapter<Msg>();

export const initialState: State = adapter.getInitialState({
    // additional entity state properties
});

export function reducer(
    state = initialState,
    action: MsgActions
): State {
    switch (action.type) {
        case MsgActionTypes.AddMsg: {
            return adapter.addOne(action.payload.msg, state);
        }

        case MsgActionTypes.UpsertMsg: {
            return adapter.upsertOne(action.payload.msg, state);
        }

        case MsgActionTypes.AddMsgs: {
            return adapter.addMany(action.payload.msgs, state);
        }

        case MsgActionTypes.UpsertMsgs: {
            return adapter.upsertMany(action.payload.msgs, state);
        }

        case MsgActionTypes.UpdateMsg: {
            return adapter.updateOne(action.payload.msg, state);
        }

        case MsgActionTypes.UpdateMsgs: {
            return adapter.updateMany(action.payload.msgs, state);
        }

        case MsgActionTypes.DeleteMsg: {
            return adapter.removeOne(action.payload.id, state);
        }

        case MsgActionTypes.DeleteMsgs: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case MsgActionTypes.LoadMsgs: {
            return adapter.setAll(action.payload.msgs, state);
        }

        case MsgActionTypes.ClearMsgs: {
            return adapter.removeAll(state);
        }

        default: {
            return state;
        }
    }
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();
