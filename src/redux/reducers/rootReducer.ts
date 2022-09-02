import { combineReducers } from "redux";
import tasks from "./tasks";

const rootReducers = combineReducers({
  tasks,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
