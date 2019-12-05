import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NavbardisplayService {

  // BehaviorSubject == observable
  private isDisplay$ = new BehaviorSubject(true);

  constructor() { }

  toggleDisplay() {
    this.isDisplay$.next(!this.isDisplay$.value);
  }

  onChangeDisplay(): Observable<boolean> {
    return this.isDisplay$.pipe(
      distinctUntilChanged()
    );
  }

}
