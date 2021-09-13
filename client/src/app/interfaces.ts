import { ActiveSockets } from './store/actions/socket.actions';
export interface User {
    _id: string;
    login: string;
    name: string;
    role: UserRoleType;
    contacts?: string[];
}

export interface UserCandidate {
    login: string;
    password: string;
    name: string;
}

export const USER_ROLE = ['user', 'guest', 'admin'];
export type UserRoleType = typeof USER_ROLE[number];

export const NSP = USER_ROLE;
export type NspType = typeof NSP[number];

export interface SocketEvent {
    type: MessageType;
    message: Message;
}

export const SOCKET_EVENT = ['message', 'delivered',
    'requestForChat', 'connect_error'];
export type MessageType = typeof SOCKET_EVENT[number];

export type Message = Msg
| JoinRoom
| LeaveRoom
| RequestForChat
| any;

export interface Msg {
    _id?: string;
    text: string;
    author_id?: string;
    room_id?: string;
    createdAt?: number;
    updatedAt?: number;
    delivered?: boolean;
    author?: string | null;
    data?: any;
    room?: string | null;
    nsp?: any;
    requestForChat?: any[];
}

export interface Room {
    _id?: string;
    members: string[];
    roomType: 'private';
    anotherUser?: User;
    anotherUser_id?: string;
    anotherUserIsActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
}
export interface ActiveSocket {
    socket_id: string;
    user_id: string;
    userName: string;
    userLogin: string;
    userRole: UserRoleType;
}

export interface Contact extends ActiveSocket {
    socket_id: string | null;
    room_id: string | null;
}

// state
export interface RoomState {
    _id: string;
    msgs: Msg[];
}

export interface Delivered {
    _id?: string;
    delivered?: boolean;
}

export interface Connected {
    data?: any;
}

export interface JoinRoom {
    room: string;
    requestedUser: string;
}
export interface LeaveRoom {
    room: string;
}


export interface RequestForChat {
    requestForChat?: any[];
}

export interface InitRoom {
    room: string; // initiator _id
    guest: string; // requester _id
}

export interface ConnectError {
    data?: any;
}

export interface SocketError {
    data?: any;
}
