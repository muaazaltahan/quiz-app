import { createAction, props } from "@ngrx/store";
import { Test } from "src/app/models/test";

export enum ActionTypes {
  load = '[tests] Load',
  loadSuccess = '[tests] Load Success',
  loadFailed = '[tests] Load Failed'
}

export const load = createAction(ActionTypes.load);
export const loadSuccess = createAction(ActionTypes.loadSuccess,props<{tests: Test[]}>());
export const loadFailed = createAction(ActionTypes.loadFailed, props<{error: any}>());
