import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionTypes } from "./actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@NgModule()
export class TestsEffects {

  loadTests$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.load),
    mergeMap(() => this.http.get('http://localhost:3000/tests').pipe(
      map(tests => ({type: ActionTypes.loadSuccess, tests})),
      catchError(error => of({type: ActionTypes.loadFailed, error}))
    ))
  ));

  constructor(
    private http: HttpClient,
    private actions$: Actions){}

}
