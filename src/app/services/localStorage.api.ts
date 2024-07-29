import { Injectable } from '@angular/core';
import { Responsible } from '../models/responsible.model';
import { Task } from '../models/task.model';
import { notInArrayOfIds } from './helpers/helpers';

const responsibles: Responsible[] = [
  {
    id: 1,
    name: 'ÉDOURAD MANET',
  },
  {
    id: 2,
    name: 'CLAUDE MONET',
  },
  {
    id: 3,
    name: 'EDGAR DEGAS',
  },
  {
    id: 4,
    name: 'PIERRE-AUGUSTE RENOIR',
  },
  {
    id: 5,
    name: 'CAMILLE PISSARRO',
  },
];

const tasks: Task[] = [
  {
    id: 1,
    header: 'header1',
    taskName: 'taskName1',
    timeStamp: '2023-02-10',
    priority: '\u{25C9} \u{25C9}',
    responsibleIds: [1, 2],
    status: 'await',
  },
  {
    id: 2,

    header: 'header2',
    taskName: 'taskName2',
    timeStamp: '2023-02-11',
    priority: '\u{25C9}',
    responsibleIds: [1, 2, 3],
    status: 'in progress',
  },
  {
    id: 3,

    header: 'header3',
    taskName: 'taskName3',
    timeStamp: '2023-02-12',
    priority: '\u{25C9} \u{25C9} \u{25C9}',
    responsibleIds: [2],
    status: 'await',
  },
  {
    id: 4,

    header: 'header4',
    taskName: 'taskName4',
    timeStamp: '2023-02-13',
    priority: '\u{25C9} \u{25C9}',
    responsibleIds: [2, 3, 4],
    status: 'testing',
  },
  {
    id: 5,
    header: 'header5',
    taskName: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    timeStamp: '2023-02-13',
    priority: '\u{25C9} \u{25C9} \u{25C9} \u{25C9}',
    responsibleIds: [1, 2, 3, 4],
    status: 'ready',
  },
];

@Injectable()
export class LocalStorageApi {
  setTasks(): void {
    let isNotSaved = this.getFromLocalTasks();
    if (isNotSaved == null) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('lastId', JSON.stringify(5));
    }
  }

  getTasks(): Task[] {
    let items = JSON.parse(localStorage.getItem('tasks'));
    return items;
  }

  addTask(task: Task): void {
    let items = this.getFromLocalTasks();
    items.push(task);
    localStorage.setItem('tasks', JSON.stringify(items));
    localStorage.setItem('lastId', JSON.stringify(task.id));
  }

  updateTasks(updated: Task): void {
    let items = this.getFromLocalTasks();
    items = items.map((item) => (item.id == updated.id ? updated : item));
    console.log(items);
    localStorage.setItem('tasks', JSON.stringify(items));
  }

  deleteTasks(ids: number[]): void {
    let items = this.getFromLocalTasks();
    items = items.filter(notInArrayOfIds(ids));
    localStorage.setItem('tasks', JSON.stringify(items));
  }

  setResponsibles(): void {
    let isNotSaved = this.getResponsibles();
    if (isNotSaved == null) {
      let tmp = JSON.stringify(responsibles);
      localStorage.setItem('responsibles', tmp);
    }
  }

  getResponsibles(): Responsible[] {
    return JSON.parse(localStorage.getItem('responsibles'));
  }

  getFromLocalTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  getLastId(): number {
    return JSON.parse(localStorage.getItem('lastId'));
  }
}
