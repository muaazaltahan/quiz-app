import { Action, ActionReducer, createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Test } from "src/app/models/test";
import * as selectedTestActions from "./actions";

export const initialState: Test = new Test();

export const _reducer = createReducer(
  initialState,
  on(selectedTestActions.setSelectedTest,(state, { test }) => {
    return test;
  })
);

export function persistStateReducer(_reducer: ActionReducer<Test>) {
  const localStorageKey = "_selectedTest";
  return (state: Test, action: Action) => {
    if (state === undefined) {
      const persisted = localStorage.getItem(localStorageKey);
      return persisted ? JSON.parse(persisted) : _reducer(state,action);
    }
    const nextState = _reducer(state,action);
    localStorage.setItem(localStorageKey, JSON.stringify(nextState));
    return nextState;
  };
}

export function updateStateReducer(_reducer: ActionReducer<Test>) {
  return (state: Test, action: Action) => {
    return _reducer(state, action);
  };
}

export function reducer(state: Test, action: Action){
  return updateStateReducer(persistStateReducer(_reducer))(state,action);
}

// selectors

export const getSelectedTest = createFeatureSelector<Test>('selectedTest');
