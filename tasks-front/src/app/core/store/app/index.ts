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
  sideBarOpened: boolean;
}

// state
const INITIAL_STATE: AppStateType = {
  sideBarOpened: true,
};

// actions
export const toggle = createAction('[App] toggle NavBar');

// selectors
const selectFeature = createFeatureSelector<AppStateType>('app');

export const selectOpenSideBar = createSelector(
  selectFeature,
  (state) => state.sideBarOpened
);

// reducer
export const reducer = createReducer(
  INITIAL_STATE,
  on(toggle, (state) => {
    return {
      ...state,
      sideBarOpened: !state.sideBarOpened,
    };
  })
);
