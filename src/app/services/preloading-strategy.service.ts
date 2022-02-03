import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, timer } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppPreloadingStrategyService implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if(route.data && route.data.preload) {
      var delay: number = route.data.delay;
      return timer(delay).pipe(
        () => load()
      );
    } else {
      return of(null);
    }
  }
}
