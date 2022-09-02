import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  chekedTodo,
  editTodo,
  okTodo,
  removeTodo,
} from "../redux/reducers/tasks";
import { ITask } from "../redux/reducers/types";

export const TodoItem = ({ id, isComplite, title, date }: ITask) => {
  const [edit, setEdit] = useState(title);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const OnEdit = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEdit(event.target.value);

  return (
    <div style={{ marginBottom: "10px" }}>
      {date}
      <span
        style={{
          margin: "0 20px",
          textDecorationLine: isComplite ? "line-through" : "none",
        }}
      >
        {isEdit ? <input value={edit} type="text" onChange={OnEdit} /> : title}
      </span>
      <button
        onClick={() => dispatch(removeTodo(id))}
        style={{ marginLeft: "15px" }}
      >
        REMOVE
      </button>
      <input
        type="checkbox"
        checked={isComplite}
        onChange={() => dispatch(chekedTodo(id))}
        style={{ marginLeft: "15px", border: "none" }}
      />
      <button
        style={{ marginLeft: "15px" }}
        onClick={() => {
          setIsEdit(true);
          dispatch(editTodo(id));
        }}
      >
        EDIT
      </button>
      <button
        style={{ marginLeft: "15px" }}
        onClick={() => {
          dispatch(okTodo(id, edit));
          setIsEdit(false);
        }}
      >
        OK
      </button>
    </div>
  );
};
