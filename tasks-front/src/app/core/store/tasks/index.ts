import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { Collection } from '../../models/collection';
import { Task } from '../../models/task';

export interface TasksStateType {
  collections: Collection[];
  tasks: Task[];
}

// state
const INITIAL_STATE: TasksStateType = {
  collections: [],
  tasks: [],
};

// actions
export const createCollection = createAction(
  '[Tasks] create collection',
  props<{ collection: Collection }>()
);

export const setCollections = createAction(
  '[Tasks] set collections',
  props<{ collections: Collection[] }>()
);

export const setTasks = createAction(
  '[Tasks] set tasks',
  props<{ tasks: Task[] }>()
);

// selectors
const selectFeature = createFeatureSelector<TasksStateType>('tasks');
export const selectCollections = createSelector(
  selectFeature,
  (state) => state.collections
);
export const selectTasks = createSelector(
  selectFeature,
  (state) => state.tasks
);

// reducer
export const reducer = createReducer(
  INITIAL_STATE,
  on(setCollections, (state, { collections }) => {
    return {
      ...state,
      collections: collections,
    };
  }),
  on(setTasks, (state, { tasks }) => {
    return {
      ...state,
      tasks: tasks,
    };
  })
);
