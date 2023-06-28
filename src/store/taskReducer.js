import { taskUpdate, taskDelete } from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdate: {
      const newArray = [...state];
      const elIndex = newArray.findIndex((el) => el.id === action.payload.id);
      newArray[elIndex] = { ...newArray[elIndex], ...action.payload };
      return newArray;
    }
    case taskDelete: {
      const newArray = [...state];
      const elIndex = newArray.filter((el) => el.id !== action.payload.id);
      return elIndex;
    }

    default:
      return state;
  }
}
