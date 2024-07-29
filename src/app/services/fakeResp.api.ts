import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageApi } from './localStorage.api';
import { Responsible } from '../models/responsible.model';

@Injectable({
  providedIn: 'root',
})
export class ResponsibleService {
  localStorage = inject(LocalStorageApi);

  get(): Observable<Responsible[]> {
    let items = this.localStorage.getResponsibles();

    return new Observable((obs) => {
      // obs.complete()
      obs.next(items);
      obs.complete();
    });
  }
}
