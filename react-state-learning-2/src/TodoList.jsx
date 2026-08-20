import { useState } from "react";
import "./TodoList.css";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
    let [todos, setTodos] = useState([
        {
            task: "sample-task",
            id: uuidv4(),
            done: false
        }
    ]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos([
            ...todos,
            {
                task: newTodo,
                id: uuidv4(),
                done: false
            }
        ]);

        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        );
    };
    let markOneDone = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, done: true }
                    : todo
            )
        );
    };
    let markAllDone = () => {
        setTodos(
            todos.map((todo) => ({
                ...todo,
                done: true
            }))
        );
    };
    return (
        <div className="container">

            <input
                placeholder="Add a Task"
                value={newTodo}
                onChange={updateTodoValue}
                className="inputbox"
            />

            <br />

            <button
                onClick={addNewTask}
                className="button"
            >
                Add Task
            </button>

            <br />
            <br />
            <br />

            <hr />

            <h2 className="h2">Task To Do</h2>

            <ul className="list">
                {todos.map((todo) => (
                    <li key={todo.id}>

                        <span
                            style={{
                                textDecoration: todo.done
                                    ? "line-through"
                                    : "none"
                            }}
                        >
                            {todo.task}
                        </span>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="del-button"
                        >
                            Delete
                        </button>

                        {!todo.done && (
                            <button
                                onClick={() => markOneDone(todo.id)}
                                className="done-button"
                            >
                                ✔️done
                            </button>
                        )}

                    </li>
                ))}
            </ul>

            <button
                onClick={markAllDone}
                className="done-all-button"
            >
                ✔️ Mark All Done
            </button>

        </div>
    );
}

export default TodoList;