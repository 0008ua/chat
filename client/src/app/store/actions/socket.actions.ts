import { NspType, ActiveSocket, Room, Msg, User, Contact } from './../../interfaces';
import { Action } from '@ngrx/store';
import { Message } from 'src/app/interfaces';

export enum SocketActionTypes {
    GetMessages = 'socket/get messages',
    GetMessagesSuccess = 'socket/get messages success',
    GetUserRooms = 'socket/get user rooms',
    GetUserRoomsSuccess = 'socket/get user rooms success',
    ActiveSockets = 'socket/get active sockets',
    GetActiveContactMsgs = 'socket/get active contact msgs',
    GetActiveContactMsgsSuccess = 'socket/get active contact msgs success',
    UpdateContacts = 'socket/update contacts',
    UpdateContactsSuccess = 'socket/update contacts success',
    SocketError = 'socket/error',
    Connect = 'socket/connect',
    Disconnect = 'socket/disconnect',
    Status = 'socket/status',
}

// get mesgs from server
export class GetMessages implements Action {
    readonly type = SocketActionTypes.GetMessages;
    constructor(public payload: Pick<Room, '_id' >) { }
}

export class GetMessagesSuccess implements Action {
    readonly type = SocketActionTypes.GetMessagesSuccess;
    constructor(public payload: {msgs: Msg[]}) { }
}

export class GetUserRooms implements Action {
    readonly type = SocketActionTypes.GetUserRooms;
    // constructor(public payload: {_id: string}) {}
}

export class GetUserRoomsSuccess implements Action {
    readonly type = SocketActionTypes.GetUserRoomsSuccess;
    constructor(public payload: { userRooms: Room[] }) { }
}

export class ActiveSockets implements Action {
    readonly type = SocketActionTypes.ActiveSockets;
    constructor(public payload: {activeSockets: ActiveSocket[]}) { }
}

export class GetActiveContactMsgs implements Action {
    readonly type = SocketActionTypes.GetActiveContactMsgs;
    constructor(public payload: { activeContact: Contact }) { }
}

export class GetActiveContactMsgsSuccess implements Action {
    readonly type = SocketActionTypes.GetActiveContactMsgsSuccess;
    constructor(public payload: { activeContactMsgs: Msg[] }) { }
}

export class UpdateContacts implements Action {
    readonly type = SocketActionTypes.UpdateContacts;
}

export class UpdateContactsSuccess implements Action {
    readonly type = SocketActionTypes.UpdateContactsSuccess;
    constructor(public payload: { contacts: Contact[] }) { }
}

export class SocketError implements Action {
    readonly type = SocketActionTypes.SocketError;
    constructor(public payload: any) { }
}

export class Status implements Action {
    readonly type = SocketActionTypes.Status;
    constructor(public payload: 'connected' | 'disconnected') { }
}

export class Connect implements Action {
    readonly type = SocketActionTypes.Connect;
    constructor(public payload?: NspType) { }
}

export class Disconnect implements Action {
    readonly type = SocketActionTypes.Disconnect;
    constructor(public payload?: NspType) { }
}

export type SocketActions
  = GetMessages
  | GetMessagesSuccess
  | GetUserRooms
  | GetUserRoomsSuccess
  | SocketError
  | Status
  | Connect
  | Disconnect
  | ActiveSockets
  | GetActiveContactMsgs
  | GetActiveContactMsgsSuccess
  | UpdateContacts
  | UpdateContactsSuccess;
