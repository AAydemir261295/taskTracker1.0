import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageApi } from './localStorage.api';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  localStorage = inject(LocalStorageApi);

  get(): Observable<Task[]> {
    var items = this.localStorage.getTasks();
    return new Observable((obs) => {
      obs.next(items);
    });
  }

  create(payload: { task: Task }): Observable<number> {
    var id = this.localStorage.getLastId() + 1;
    this.localStorage.addTask({ ...payload.task, id: id });
    return new Observable((obs) => {
      obs.next(id);
      id++;
      obs.complete();
    });
  }

  update(payload: { updates: Task }): Observable<boolean> {
    this.localStorage.updateTasks(payload.updates);
    return new Observable((obs) => {
      obs.next(true);
      obs.complete();
    });
  }

  delete(payload: { ids: number[] }): Observable<boolean> {
    this.localStorage.deleteTasks(payload.ids);
    return new Observable((obs) => {
      obs.next(true);
      obs.complete();
    });
  }
}
