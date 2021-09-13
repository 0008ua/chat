import { SocketActions, SocketActionTypes } from '../actions/socket.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActiveSocket, Contact, Msg, Room } from 'src/app/interfaces';

export const socketFeatureKey = 'socket';

export interface State {
    msgs: Msg[],
    userRooms: Room[],
    activeSockets: ActiveSocket[],
    activeContact: Contact | null,
    activeContactMsgs: Msg[],
    contacts: any,
    loading: boolean,
    status: 'connected' | 'disconnected',
}

export const initialState: State = {
    msgs: [],
    userRooms: [],
    activeSockets: [],
    activeContact: null,
    activeContactMsgs: [],
    contacts: [],
    loading: false,
    status: 'disconnected',
};

export function reducer(state = initialState, action: SocketActions): State {
    switch (action.type) {
        case SocketActionTypes.ActiveSockets:
            return { ...state, activeSockets: [...action.payload.activeSockets]};
        case SocketActionTypes.GetActiveContactMsgs:
            return { ...state, activeContact: action.payload.activeContact };
        case SocketActionTypes.GetActiveContactMsgsSuccess:
            return { ...state, activeContactMsgs: action.payload.activeContactMsgs };
        case SocketActionTypes.GetMessages:
            return { ...state, loading: true };
        case SocketActionTypes.GetMessagesSuccess:
            return { ...state, loading: false, activeContactMsgs: [...state.activeContactMsgs, ...action.payload.msgs]};
        case SocketActionTypes.GetUserRoomsSuccess:
            return { ...state, userRooms: action.payload.userRooms };
        case SocketActionTypes.UpdateContactsSuccess:
            return { ...state, contacts: action.payload.contacts };
        case SocketActionTypes.Status:
            return { ...state, status: action.payload };
        default:
            return state;
    }
}

const featureSelector = createFeatureSelector<State>(socketFeatureKey);
export const getMsgs = createSelector(featureSelector, (state) => state.msgs);
export const getUserRooms = createSelector(featureSelector, (state) => state.userRooms);
export const getActiveSockets = createSelector(featureSelector, (state) => state.activeSockets);
export const getContacts = createSelector(featureSelector, (state) => state.contacts);
export const getActiveContact = createSelector(featureSelector, (state) => state.activeContact);
export const getActiveContactMsgs = createSelector(featureSelector, (state) => state.activeContactMsgs);
export const getStatus = createSelector(featureSelector, (state) => state.status);
