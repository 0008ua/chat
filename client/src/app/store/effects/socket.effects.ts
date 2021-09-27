import { ActiveSocket } from './../../interfaces';
import { getActiveSockets } from './../reducers/socket.reducer';
import { GetUserRooms, UpdateContacts, GetActiveContactMsgs } from './../actions/socket.actions';
import { SocketService } from './../../services/socket.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { from, Observable, of, zip } from 'rxjs';
import { catchError, concatAll, flatMap, map, mergeMap, scan, switchMap, tap, toArray, withLatestFrom } from 'rxjs/operators';
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
            tap((userRooms) => console.log('get userRooms', userRooms)),
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
        tap((tap) => console.log('tap', tap)),
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
            console.log('userRooms-update', userRooms);
            console.log('activeSockets-update', activeSockets);

            let contacts = userRooms.map((room) => {
                let socket_id = null;
                activeSockets = activeSockets.filter((socket) => {
                    if (socket.user_id === room.anotherUser._id) {
                        socket_id = socket.socket_id;
                        return false;
                    }
                    return true;
                });
                if (socket_id) {
                    const result = {
                        socket_id,
                        room_id: room._id,
                        user_id: room.anotherUser._id,
                        userName: room.anotherUser.name,
                        userLogin: room.anotherUser.login,
                        userRole: room.anotherUser.role,
                        unreadedMessagesQty: 0,
                    };
                    socket_id = null;
                    return result;
                }
                const result = {
                    socket_id: null,
                    room_id: room._id,
                    user_id: room.anotherUser._id,
                    userName: room.anotherUser.name,
                    userLogin: room.anotherUser.login,
                    userRole: room.anotherUser.role,
                    unreadedMessagesQty: 0,
                };
                return result;
            });
            contacts = [...contacts, ...activeSockets.map((socket) => ({ ...socket, room_id: null }))];
            return contacts;
        }),
        mergeMap((contacts) => from(contacts).pipe(
            mergeMap((contact) => {
                if (contact.room_id) {
                    return this.socketService.getUnreadedMessagesQty(contact.room_id).pipe(
                        map((qty) => ({ ...contact, unreadedMessagesQty: qty }))
                    );
                }
                return of({ ...contact, unreadedMessagesQty: 0 });
            }),
            toArray(),
        )),
        map((contacts: Contact[]) => {
            console.log('contacts', contacts);
            return new fromSocketActions.UpdateContactsSuccess({ contacts: contacts });
        }),
        catchError((err) => of(new fromSocketActions.SocketError(err))),


    );
    // ),

    // ),
    // map((contacts) => of(contacts).pipe(
    // switchMap((contacts) => {
    //     return of(contacts.map((contact) => {
    //         if (contact.room_id) {
    //             return this.socketService.getUnreadedMessagesQty(contact.room_id).pipe(
    //                 map((qty) => ({...contact, unreadedMessagesQty: qty}))
    //             );
    //         }
    //         return ({ ...contact, unreadedMessagesQty: 0 });
    //     }));
    // }),
    // )),

    // );

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
