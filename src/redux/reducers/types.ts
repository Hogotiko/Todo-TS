import { ADD, REMOVE, RESOLVE, CHEKED, DELETE, EDIT, OK } from "./tasks";

export type ITask = {
  date: any;
  title: string | number;
  isComplite: boolean;
  isEdit: boolean;
  id: number;
};

interface IAddAction {
  type: typeof ADD;
  payload: ITask;
}

interface IRemoveAction {
  type: typeof REMOVE;
  payload: {
    id: number;
  };
}

interface IResolveAction {
  type: typeof RESOLVE;
  payload: {
    id: number;
  };
}

interface ICheckedAction {
  type: typeof CHEKED;
  payload: {
    id: number;
  };
}

interface IDeleteAction {
  type: typeof DELETE;
  payload: {
    id: number;
  };
}

interface IEditAction {
  type: typeof EDIT;
  payload: {
    id: number;
  };
}

interface IOkAction {
  type: typeof OK;
  payload: {
    id: number;
    title: number | string;
  };
}

export type TaskActionTypes =
  | IAddAction
  | IRemoveAction
  | IResolveAction
  | ICheckedAction
  | IDeleteAction
  | IEditAction
  | IOkAction;
