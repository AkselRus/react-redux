import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
    titleChange,
    taskDelete,
    completeTask,
    loadTasks,
    getTasks,
    getTasksLoadingStatus,
    taskCreate,
} from "./store/task";
import { Provider, useSelector, useDispatch } from "react-redux";
import configureStore from "./store/store";
import { getErrors } from "./store/errors";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore();
const App = () => {
    const state = useSelector(getTasks());
    const isLoading = useSelector(getTasksLoadingStatus());
    const error = useSelector(getErrors());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    const changeTitle = (taskId) => {
        dispatch(titleChange(taskId));
    };
    const deleteTask = (taskId) => {
        dispatch(taskDelete(taskId));
    };
    const createTask = () => {
        dispatch(taskCreate());
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    return (
        <>
            <h1>App</h1>
            <hr />

            <button onClick={() => createTask()}>Create task</button>
            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`Completed: ${el.completed}`}</p>
                        <button onClick={() => dispatch(completeTask(el.id))}>
                            Complete
                        </button>
                        <button onClick={() => changeTitle(el.id)}>
                            Change title
                        </button>
                        <button onClick={() => deleteTask(el.id)}>
                            Delete task
                        </button>

                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
