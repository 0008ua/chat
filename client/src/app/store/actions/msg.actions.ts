import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Msg } from '../../interfaces';

export enum MsgActionTypes {
    LoadMsgs = '[Msg] Load Msgs',
    AddMsg = '[Msg] Add Msg',
    UpsertMsg = '[Msg] Upsert Msg',
    AddMsgs = '[Msg] Add Msgs',
    UpsertMsgs = '[Msg] Upsert Msgs',
    UpdateMsg = '[Msg] Update Msg',
    UpdateMsgs = '[Msg] Update Msgs',
    DeleteMsg = '[Msg] Delete Msg',
    DeleteMsgs = '[Msg] Delete Msgs',
    ClearMsgs = '[Msg] Clear Msgs'
}

export class LoadMsgs implements Action {
    readonly type = MsgActionTypes.LoadMsgs;

    constructor(public payload: { msgs: Msg[] }) {}
}

export class AddMsg implements Action {
    readonly type = MsgActionTypes.AddMsg;

    constructor(public payload: { msg: Msg }) {}
}

export class UpsertMsg implements Action {
    readonly type = MsgActionTypes.UpsertMsg;

    constructor(public payload: { msg: Msg }) {}
}

export class AddMsgs implements Action {
    readonly type = MsgActionTypes.AddMsgs;

    constructor(public payload: { msgs: Msg[] }) {}
}

export class UpsertMsgs implements Action {
    readonly type = MsgActionTypes.UpsertMsgs;

    constructor(public payload: { msgs: Msg[] }) {}
}

export class UpdateMsg implements Action {
    readonly type = MsgActionTypes.UpdateMsg;

    constructor(public payload: { msg: Update<Msg> }) {}
}

export class UpdateMsgs implements Action {
    readonly type = MsgActionTypes.UpdateMsgs;

    constructor(public payload: { msgs: Update<Msg>[] }) {}
}

export class DeleteMsg implements Action {
    readonly type = MsgActionTypes.DeleteMsg;

    constructor(public payload: { id: string }) {}
}

export class DeleteMsgs implements Action {
    readonly type = MsgActionTypes.DeleteMsgs;

    constructor(public payload: { ids: string[] }) {}
}

export class ClearMsgs implements Action {
    readonly type = MsgActionTypes.ClearMsgs;
}

export type MsgActions =
 LoadMsgs
 | AddMsg
 | UpsertMsg
 | AddMsgs
 | UpsertMsgs
 | UpdateMsg
 | UpdateMsgs
 | DeleteMsg
 | DeleteMsgs
 | ClearMsgs;
