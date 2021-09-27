import { switchMap, tap, take, distinctUntilChanged } from 'rxjs/operators';
import { getActiveContact, getActiveContactMsgs, getContacts, getUserRooms } from './../../store/reducers/socket.reducer';
import { Contact, Message, Room } from 'src/app/interfaces';
import { LoginAnonymous } from './../../store/actions/user.actions';
import { GetMessages, GetMessagesSuccess, ActiveSockets, GetUserRooms, UpdateContacts, GetActiveContactMsgs, GetActiveContactMsgsSuccess } from './../../store/actions/socket.actions';
import { fromEvent, Observable } from 'rxjs';
import { Msg, User, ActiveSocket } from './../../interfaces';
import { SocketService } from './../../services/socket.service';
import { State } from './../../store/reducers/index';
import { UserService } from './../../services/user.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, HostListener } from '@angular/core';
import { Logout } from 'src/app/store/actions/user.actions';
import { Store } from '@ngrx/store';
import { getMsgs } from '../../store/reducers/socket.reducer';
import { getUser } from 'src/app/store/reducers/user.reducer';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
    textValidation: boolean = false;
    nameValidation: boolean = false;
    msgs: Msg[] = [];
    contacts: Contact[] = [];
    userRooms: Room[];
    activeContact: Contact;

    @ViewChild('chatMessages', { static: false }) chatMessages: ElementRef;
    @ViewChild('inpMsg', { static: true }) inpMsg: ElementRef;
    @ViewChild('inpName', { static: false }) inpName: ElementRef;

    inpMsgEvent$: Observable<InputEvent>;
    inpNameEvent$: Observable<InputEvent>;
    user: User;

    constructor(
        private store: Store<State>,
        private socketService: SocketService,
        private userService: UserService,
    ) { }

    @HostListener('keydown', ['$event'])
    onPress(e: KeyboardEvent) {
        if (e.key === 'Enter' && e.target === (this.inpMsg.nativeElement) as HTMLElement) {
            this.send();
        }
    }

    ngOnInit(): void {
        this.store.select(getUser)
            .subscribe((user) => {
                if ((user && !this.user) || (user && this.user && this.user._id !== user._id)) {
                    // dispatch action only on user logged in
                    this.store.dispatch(new GetUserRooms());
                }
                this.user = user;
            });

        this.store.select(getUserRooms)
            .subscribe((userRooms) => this.userRooms = userRooms);

        this.store.select(getActiveContactMsgs)
            .subscribe((msgs) => this.msgs = msgs);

        this.store.select(getActiveContact)
            .subscribe((activeContact) => this.activeContact = activeContact);

        this.socketService.onSocketEvent('msg')
            .subscribe((msg) => this.store.dispatch(new GetMessagesSuccess({ msgs: [msg] })));

        this.store.select(getContacts)
            .subscribe((contacts) => this.contacts = contacts);

        this.socketService.onSocketEvent('activeSockets')
            .subscribe((activeSockets) => {
                activeSockets = activeSockets.filter((socket: ActiveSocket) => socket.user_id !== this.user._id);
                this.store.dispatch(new ActiveSockets({ activeSockets }));
            });

        this.socketService.onSocketEvent('joinedRoom')
            .subscribe((room_id) => {
                this.store.dispatch(new GetUserRooms());
            });

        this.socketService.onSocketEvent('connect_error')
            .subscribe((data) => console.log('socket connect_error', data));

        this.inpMsgEvent$ = fromEvent(this.inpMsg.nativeElement, 'input');

        this.inpMsgEvent$
            .subscribe((inputEvent: InputEvent) => {
                if (!this.inpMsg.nativeElement.value) {
                    this.textValidation = false;
                } else {
                    this.textValidation = true;
                }
            });
    }

    loginAnonymous() {
        const name = this.inpName.nativeElement.value;
        this.store.dispatch(new LoginAnonymous(name));
        this.inpName.nativeElement.value = '';
        this.nameValidation = false;
    }


    ngAfterViewChecked(): void {
        this.scrollTop();
        if (this.inpName) {
            this.inpNameEvent$ = fromEvent(this.inpName.nativeElement, 'input');
            this.inpNameEvent$
                .subscribe((inputEvent: InputEvent) => {
                    if (!this.inpName.nativeElement.value) {
                        this.nameValidation = false;
                    } else {
                        this.nameValidation = true;
                    }
                });
        }
    }

    startChat(contact: Contact) {
        const callback = (room_id: string) => {
            contact = { ...contact, room_id };
            this.store.dispatch(new GetActiveContactMsgs({ activeContact: contact }));
        };
        this.socketService.emitSocketEvent('joinRoom', [{requestedUser_id: contact.user_id}, callback]);
    }

    logout() {
        this.store.dispatch(new Logout());
    }

    scrollTop() {
        this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    }

    send() {
        if (!this.textValidation) {
            return;
        }
        const text = this.inpMsg.nativeElement.value;
        console.log('msg send this.activeContact', this.activeContact);
        this.socketService.emitSocketEvent('msg', { text, room_id: this.activeContact.room_id });
        this.inpMsg.nativeElement.value = '';
        this.textValidation = false;
    }
}
