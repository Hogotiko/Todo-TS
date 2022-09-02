import { useDispatch } from "react-redux";
import { resolveTodo, deleteTodo } from "../redux/reducers/tasks";
import { ITask } from "../redux/reducers/types";

function TodoRemoved({ id, title, date }: ITask) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        {date}
        <span style={{ marginLeft: "15px" }}>{title}</span>
        <button
          onClick={() => dispatch(resolveTodo(id))}
          style={{ marginLeft: "15px" }}
        >
          RESTORE
        </button>
        <button
          style={{ marginLeft: "15px" }}
          onClick={() => dispatch(deleteTodo(id))}
        >
          X
        </button>
      </p>
    </div>
  );
}

export default TodoRemoved;
