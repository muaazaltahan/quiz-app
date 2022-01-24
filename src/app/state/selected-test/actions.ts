import { createAction, props } from "@ngrx/store";
import { Test } from "src/app/models/test";

export enum ActionTypes {
  set = '[selectedTest] Set'
}

export const setSelectedTest = createAction(ActionTypes.set, props<{test: Test}>());
