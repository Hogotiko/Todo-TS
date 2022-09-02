import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/tasks";

function TodoHeader() {
  const [task, setTask] = useState<any>("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    if (task) dispatch(addTodo(task));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
          setTask("");
        }}
        style={{ margin: "25px" }}
      >
        <input
          value={task}
          type="text"
          onChange={(event) => setTask(event.target.value)}
          placeholder={"Add your todos"}
        />
        <button style={{ marginLeft: "15px" }}>ADD</button>
      </form>
    </div>
  );
}

export default TodoHeader;
