import { ActiveSocket } from './../../interfaces';
import { getActiveSockets } from './../reducers/socket.reducer';
import { GetUserRooms, UpdateContacts, GetActiveContactMsgs } from './../actions/socket.actions';
import { SocketService } from './../../services/socket.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import * as fromSocketActions from '../actions/socket.actions';
import { State } from '../reducers';
import { getUserRooms } from '../reducers/socket.reducer';
import { Contact, Room } from 'src/app/interfaces';

@Injectable()
export class SocketEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<State>,
        private socketService: SocketService,
    ) { }

    // @Effect()
    // getMessages: Observable<Action | Action[]> = this.actions$.pipe(
    //     ofType(fromSocketActions.SocketActionTypes.GetMessages),
    //     map((action: fromSocketActions.GetMessages) => action.payload),
    //     switchMap((payload) => this.socketService.getMessages({ room_id: payload._id }).pipe(
    //         map((msgs) => new fromSocketActions.GetMessagesSuccess({ msgs })),
    //         catchError((err) => of(new fromSocketActions.SocketError(err))),
    //     )),
    // );

    @Effect()
    getUserRooms: Observable<Action | Action[]> = this.actions$.pipe(
        ofType(fromSocketActions.SocketActionTypes.GetUserRooms),
        // map((action: fromSocketActions.GetUserRooms) => action.payload),
        switchMap((payload) => this.socketService.getUserRooms().pipe(
            switchMap((userRooms) => [
                new fromSocketActions.GetUserRoomsSuccess({ userRooms }),
                new fromSocketActions.UpdateContacts(),
            ]),
            catchError((err) => of(new fromSocketActions.SocketError(err))),
        )),
    );

    @Effect()
    getActiveContactMsgs: Observable<Action | Action[]> = this.actions$.pipe(
        ofType(fromSocketActions.SocketActionTypes.GetActiveContactMsgs),
        map((action: fromSocketActions.GetActiveContactMsgs) => action.payload),
        switchMap((payload) => this.socketService.getGetActiveContactMsgs({
            anotherUser_id: payload.activeContact.user_id, room_id: payload.activeContact.room_id,
        }).pipe(
            map((activeContactMsgs) =>
                new fromSocketActions.GetActiveContactMsgsSuccess({ activeContactMsgs }),
            ),
            catchError((err) => of(new fromSocketActions.SocketError(err))),
        )),
    );

    @Effect()
    activeSockets: Observable<Action | Action[]> = this.actions$.pipe(
        ofType(fromSocketActions.SocketActionTypes.ActiveSockets),
        map((_) => new fromSocketActions.UpdateContacts()),
        catchError((err) => of(new fromSocketActions.SocketError(err))),
    );

    @Effect()
    updateContacts: Observable<Action | Action[]> = this.actions$.pipe(
        ofType(fromSocketActions.SocketActionTypes.UpdateContacts),
        withLatestFrom(
            this.store$.select(getUserRooms),
            this.store$.select(getActiveSockets)),
        map(([action, userRooms, activeSockets]: [Action, Room[], ActiveSocket[]]): Contact[] => {
            let contacts = userRooms.map((room) => {
                let socket_id = null;
                activeSockets = activeSockets.filter((socket) => {
                    if (socket.user_id === room.anotherUser_id) {
                        socket_id = socket.socket_id;
                        return false;
                    }
                    return true;
                });

                if (socket_id) {
                    const result = {
                        socket_id,
                        room_id: room._id,
                        user_id: room.anotherUser_id,
                        userName: room.anotherUser.name,
                        userLogin: room.anotherUser.login,
                        userRole: room.anotherUser.role,
                    };
                    socket_id = null;
                    return result;
                }
                const result = {
                    socket_id: null,
                    room_id: room._id,
                    user_id: room.anotherUser_id,
                    userName: room.anotherUser.name,
                    userLogin: room.anotherUser.login,
                    userRole: room.anotherUser.role,
                };
                return result;
            });
            contacts = [...contacts, ...activeSockets.map((socket) => ({ ...socket, room_id: null }))];
            return contacts;
        }),
        map((contacts) => {
            return new fromSocketActions.UpdateContactsSuccess({ contacts });
        }),
        catchError((err) => of(new fromSocketActions.SocketError(err))),
    );

    @Effect()
    connect: Observable<Action | Action[]> = this.actions$.pipe(
        ofType(fromSocketActions.SocketActionTypes.Connect),
        map((action: fromSocketActions.Connect) => action.payload),
        map((payload) => {
            this.socketService.connect(payload);
            // this.socketService.connect('user');
            return new fromSocketActions.Status('connected');
        }),
        catchError((err) => of(new fromSocketActions.SocketError(err))),
    );

    @Effect()
    disconnect: Observable<Action | Action[]> = this.actions$.pipe(
        ofType(fromSocketActions.SocketActionTypes.Disconnect),
        map((action: fromSocketActions.Disconnect) => action.payload),
        map((payload) => {
            this.socketService.disconnect(payload);
            // this.socketService.disconnect('user');
            return new fromSocketActions.Status('disconnected');
        }),
        catchError((err) => of(new fromSocketActions.SocketError(err))),
    );
}
