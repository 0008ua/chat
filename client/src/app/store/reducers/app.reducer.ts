import { Action, createFeatureSelector, createSelector } from '@ngrx/store';


export const appFeatureKey = 'app';

export interface State {
  loading: boolean;

}

export const initialState: State = {
  loading: false,
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

const featureSelector = createFeatureSelector<State>(appFeatureKey);

export const getLoading = createSelector(featureSelector, (state) => state.loading);
