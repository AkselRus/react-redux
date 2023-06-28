import * as actions from "./actionTypes";

export function taskComplete(id) {
  return {
    type: actions.taskUpdate,
    payload: { id, completed: true },
  };
}
export function titleChange(id) {
  return {
    type: actions.taskUpdate,
    payload: { id, title: `New title for ${id}` },
  };
}
export function taskDelete(id) {
  return {
    type: actions.taskDelete,
    payload: { id },
  };
}
