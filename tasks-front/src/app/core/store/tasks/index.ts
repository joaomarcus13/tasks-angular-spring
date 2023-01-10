import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { Collection } from "../../models/collection";





export interface TasksStateType {
    collections: Collection[],
}


// state
const INITIAL_STATE: TasksStateType = {
    collections: []
}

// actions
export const createCollection = createAction('[Tasks] create collection', props<{collection: Collection}>())

export const setCollections = createAction('[Tasks] set collections', props<{collections: Collection[]}>())


// selectors
const selectFeature = createFeatureSelector<TasksStateType>('tasks');
export const selectCollections = createSelector(
    selectFeature,
    (state) => state.collections
)

// reducer 
export const reducer = createReducer(
    INITIAL_STATE,
    on(setCollections, (state, {collections})=>{
        return {
            ...state,
            collections: collections
        }
    })
)