import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Test } from "src/app/models/test";
import * as testsActions from "./actions";
import { state } from "@angular/animations";

export interface TestsState extends EntityState<Test> {
  error: any;
  selectId: (a: Test) => string;
  sortComparer: (a: Test, b: Test) => number;
}

export function selectItemId(a: Test): string {
  return a.id.toString();
}

export function sortByName(a: Test, b: Test): number {
  return a.title.localeCompare(b.title);
}

export const adapter: EntityAdapter<Test> = createEntityAdapter<Test>();

export const initialState = adapter.getInitialState({
  selectId: selectItemId,
  sortComparer: sortByName,
  error: ''
});

const testsReducer = createReducer(
  initialState,
  on(testsActions.loadSuccess, (state, {tests}) => adapter.setAll(tests, state)),
  on(testsActions.loadFailed, (state, {error}) => ({...state, error}))
);

export function reducer(state: TestsState, action: Action) {
  return testsReducer(state, action);
}

// Selectors

const { selectAll } = adapter.getSelectors();

const feature = createFeatureSelector<TestsState>('tests');

export const getTests = createSelector(feature,selectAll);
