import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { NspType, Msg, User, MessageType, Message, NSP, Room } from './../interfaces';
import { getUser } from './../store/reducers/user.reducer';
import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { map, tap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';
import { getMsgs } from '../store/reducers/socket.reducer';
import { GetMessagesSuccess } from '../store/actions/socket.actions';

export class SocketNsp extends Socket {
    constructor(socketConfig: SocketIoConfig) {
        super(socketConfig);
    }
}


@Injectable({
    providedIn: 'root',
})

export class SocketService {
    user: User | null;
    msgs: Message[];

    // guestNsp: SocketNsp;
    // userNsp: SocketNsp;
    // adminNsp: SocketNsp;

    constructor(
        private socket: Socket,
        private store: Store<State>,
        private http: HttpClient,
    ) {
        this.store.select(getUser)
            .subscribe((user) => this.user = user);

        this.store.select(getMsgs)
            .subscribe((msgs) => this.msgs = msgs);

        // create socket namespaces and event listeners for every namespace
        // for (const nsp of NSP) {
        //     this[nsp + 'Nsp'] = this.socketNspFactory(nsp);
        // }
        // for socket root namespace
        // this.socket;
    }

    isConnected(nsp?: NspType): Socket | SocketNsp {
        if (nsp) {
            return this.socketNsp(nsp);
        }
        return this.socket;
    }

    connect(nsp?: NspType): void {
        if (nsp === 'guest') {
            this.socketNsp(nsp).connect();
            return;
        }
        if (nsp === 'user') {
            this.socketNsp(nsp).connect();
            this.socketNsp('guest').connect();
            return;
        }
        this.socket.connect();
    }

    disconnect(nsp?: NspType): void {
        if (nsp === 'guest') {
            this.socketNsp(nsp).disconnect();
            return;
        }
        if (nsp === 'user') {
            this.socketNsp(nsp).disconnect();
            this.socketNsp('guest').disconnect();
            return;
        }
        this.socket.disconnect();
    }

    onSocketEvent(socketEvent: MessageType, nsp?: NspType) {
        if (nsp) {
            return this.socketNsp(nsp).fromEvent(socketEvent).pipe(
                map((data: Message) => data));
        }
        return this.socket.fromEvent(socketEvent).pipe(
            map((data: Message) => data));
    }

    emitSocketEvent(socketEvent: MessageType, socketData: Message, nsp?: NspType) {
        if (nsp) {
            this.socketNsp(nsp).emit(socketEvent, socketData);
            return;
        }
        this.socket.emit(socketEvent, socketData);
    }

    private socketNsp(nsp: NspType): SocketNsp {
        return this[nsp + 'Nsp'];
    }

    private socketNspFactory(nsp: NspType) {
        return new SocketNsp({ url: '/' + nsp + 'Nsp', options: {} });
    }

    // getMessages({room_id}): Observable<Message[]> {
    //     return of([{
    //         _id: 'sdfsdfsdfsd',
    //         text: 'test1',
    //         delivered: true,
    //     }, {
    //         _id: 'sdfs2342dfsdfsd',
    //         text: 'test2',
    //         delivered: false,
    //     }]);
    // }

    getUserRooms():Observable<Room[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };

        return this.http.get<Room[]>(
            'api/socket/get-user-rooms',
            httpOptions,
        );
    }

    getGetActiveContactMsgs({ anotherUser_id, room_id }): Observable<Msg[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            params: new HttpParams()
                .set('anotherUser_id', anotherUser_id)
                .set('room_id', room_id),
        };
        return this.http.get<Msg[]>(
            'api/socket/get-active-contact-msgs',
            httpOptions,
        );
    }

    // sendMessage(msg: Message) {
    //     this.guestNsp.emit('message', msg);
    // }

    // getMessage() {
    //     return this.guestNsp.fromEvent('message').pipe(
    //         map((msg: Message) => msg));
    // }

    // getMWError() {
    //     return this.guestNsp.fromEvent('connect_error').pipe(
    //         map((msg: any) => {
    //             console.log('msg error', msg);
    //             return msg;
    //         }));
    // }

    // getPatchMessage(): Observable<void> {
    //     return this.guestNsp.fromEvent('patchMessage').pipe(
    //         map((patch) => this.store.dispatch(new GetMessagesSuccess(this.patchMessage(patch)))),
    //     );
    // }

    uuid() {
        return uuidv4();
    }

    composeMessage(text: string): Msg {
        return {
            text,
            // _id: this.uuid(),
            // delivered: false,
            // createdAt: Date.now(),
            // author_id: this.user._id,
        };
    }

    // patchMessage(patch: Partial<Message>) {
    //     return this.messages.map((el) => {
    //         if (patch._id === el._id) {
    //             return { ...el, ...patch };
    //         }
    //     });
    // }
}


