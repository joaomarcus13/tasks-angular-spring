import {
  Action,
  createAction,
  props,
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

export interface AppStateType {
  openSideBar: boolean;
}

export interface StateType {
  stateApp: AppStateType;
}

const INITIAL_STATE: AppStateType = {
  openSideBar: true,
};

export const toggle = createAction('TOGGLE');

const selectFeature = createFeatureSelector<AppStateType>('app');

export const selectOpenSideBar = createSelector(
  selectFeature,
  (state) => state.openSideBar
);

// export function getOpenSideBar(state: AppStateType) {
//   return state.openSideBar;
// }

export const reducer = createReducer(
  INITIAL_STATE,
  on(toggle, (state) => {
    return {
      ...state,
      openSideBar: !state.openSideBar,
    };
  })
);
