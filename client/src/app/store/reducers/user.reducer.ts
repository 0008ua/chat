import { LoadUser } from './../actions/user.actions';
import { User } from './../../interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
    user: User | null;
    loading: boolean;
    redirectionUrl: string | null;
}

export const initialState: State = {
    user: null,
    loading: false,
    redirectionUrl: null,
};

export function reducer(state = initialState, action: UserActions): State {
    switch (action.type) {
        case UserActionTypes.LoadUser:
            return { ...state, loading: true };

        case UserActionTypes.Authenticated:
            return { ...state, user: { ...action.payload }, loading: false };

        case UserActionTypes.NotAuthenticated:
            return { ...state, user: initialState.user, loading: false };

        case UserActionTypes.Redirection:
            return { ...state, redirectionUrl: action.payload };

        default:
            return state;
    }
}

const featureSelector = createFeatureSelector<State>(userFeatureKey);

export const getUser = createSelector(featureSelector, (state) => state.user);
export const redirectionUrl = createSelector(featureSelector, (state) => state.redirectionUrl);
