import { useSelector } from "react-redux";
import TodoHeader from "./TodoHeader";
import { TodoItem } from "./TodoItem";
import TodoRemoved from "./TodoRemoved";
import { RootState } from "../redux/reducers/rootReducer";

function Todolist() {
  const todos = useSelector((store: RootState) => store.tasks.todos);
  const delTodo = useSelector((store: RootState) => store.tasks.delTodo);

  return (
    <div>
      <h1>MY TODOS</h1>
      <div>
        <TodoHeader />
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <hr />
      <div>
        <h1>Removed Todos</h1>
        {delTodo.map((item) => (
          <TodoRemoved key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Todolist;
