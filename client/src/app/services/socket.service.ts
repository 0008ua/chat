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

    constructor(
        private socket: Socket,
        private store: Store<State>,
        private http: HttpClient,
    ) {
        this.store.select(getUser)
            .subscribe((user) => this.user = user);

        this.store.select(getMsgs)
            .subscribe((msgs) => this.msgs = msgs);
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

    emitSocketEvent(socketEvent: MessageType, socketData: Message | [Message, Function]) {
        // if use emit with callback then pass socketData as array [Message, callback]
        // otherwise socketData is Message object
        this.socket.emit(socketEvent, ...Array.isArray(socketData) ? socketData : [socketData]);
    }


    private socketNsp(nsp: NspType): SocketNsp {
        return this[nsp + 'Nsp'];
    }

    private socketNspFactory(nsp: NspType) {
        return new SocketNsp({ url: '/' + nsp + 'Nsp', options: {} });
    }

    getUserRooms():Observable<Room[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get<Room[]>(
            'api/socket/get-user-rooms',
            httpOptions,
        ).pipe(tap((getUserRooms) => console.log('getUserRooms', getUserRooms)));
    }

    getUnreadedMessagesQty(room_id: string): Observable<number> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            params: new HttpParams()
                .set('room_id', room_id),
        };
        return this.http.get<number>(
            'api/socket/get-unreaded-messages-qty',
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

    uuid() {
        return uuidv4();
    }

    composeMessage(text: string): Msg {
        return {
            text,
        };
    }
}


