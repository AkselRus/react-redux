import { legacy_createStore as createStore } from "redux";
import { taskReducer } from "./taskReducer";

const initialState = [
  { id: 1, completed: false, title: "Task 1" },
  { id: 2, completed: false, title: "Task 2" },
];
export function initiateStore() {
  return createStore(taskReducer, initialState);
}
