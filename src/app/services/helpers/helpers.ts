import { Responsible } from '../../models/responsible.model';
import { Task } from '../../models/task.model';

export function notInArrayOfResponsibles(arr: Responsible[]) {
  return function (value: Responsible | Task) {
    return arr.find((val) => val.id == value.id) == undefined;
  };
}

export function notInArrayOfIds(arr: number[]) {
  return function (value: Responsible | Task) {
    return arr.find((id) => id == value.id) == undefined;
  };
}

export function inArray(arr: number[]) {
  return function (value: Responsible | Task) {
    return arr.find((id) => id == value.id) != undefined;
  };
}
