import { ITask, TaskActionTypes } from "./types";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const CHEKED = "CHEKED";
export const RESOLVE = "RESOLVE";
export const DELETE = "DELETE";
export const EDIT = "EDIT";
export const OK = "OK";

let Data = new Date();
let Year = Data.getFullYear();
let Month = Data.getMonth() + 1;
let Day = Data.getDate();
let Hour = Data.getHours();
let Minute = Data.getMinutes();

let newDate = [Day + "." + Month + "." + Year + "/" + Hour + "." + Minute];

type InitType = {
  todos: Array<any>;
  delTodo: Array<any>;
};

const initialState: InitType = {
  todos: [],
  delTodo: [],
};

const tasks = (state = initialState, action: TaskActionTypes) => {
  switch (action.type) {
    case ADD:
      const newTodo = {
        date: newDate,
        title: action.payload,
        isComplite: false,
        isEdit: false,
        id: ~~(Math.random() * 1000),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case EDIT:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? { ...item, isEdit: true } : item
        ),
      };
    case OK:
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, title: action.payload.title }
          : item
      );
      return {
        ...state,
        todos: newTodos,
      };
    case REMOVE:
      const delTodo = state.todos.find(({ id }) => id === action.payload.id);
      const todoDeleteTodo = state.todos.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todos: todoDeleteTodo,
        delTodo: [...state.delTodo, delTodo],
      };
    case RESOLVE:
      const resTodo = state.delTodo.find(({ id }) => id === action.payload.id);
      const ostatok = state.delTodo.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todos: [...state.todos, resTodo],
        delTodo: ostatok,
      };
    case CHEKED:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, isComplite: !item.isComplite }
            : item
        ),
      };
    case DELETE:
      const ost = state.delTodo.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        todos: [...state.todos],
        delTodo: ost,
      };
    default:
      return state;
  }
};

export default tasks;

export const addTodo = (title: ITask): TaskActionTypes => {
  return {
    type: ADD,
    payload: title,
  };
};

export const removeTodo = (id: number): TaskActionTypes => {
  return {
    type: REMOVE,
    payload: { id },
  };
};

export const chekedTodo = (id: number): TaskActionTypes => {
  return {
    type: CHEKED,
    payload: { id },
  };
};

export const resolveTodo = (id: number): TaskActionTypes => {
  return {
    type: RESOLVE,
    payload: { id },
  };
};

export const deleteTodo = (id: number): TaskActionTypes => {
  return {
    type: DELETE,
    payload: { id },
  };
};

export const editTodo = (id: number): TaskActionTypes => {
  return {
    type: EDIT,
    payload: { id },
  };
};

export const okTodo = (id: number, title: number | string): TaskActionTypes => {
  return {
    type: OK,
    payload: { id, title },
  };
};
