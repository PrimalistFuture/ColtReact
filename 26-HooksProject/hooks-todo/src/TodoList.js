import React from "react";
import Todo from "./Todo";

import { Paper } from '@mui/material';
import { List } from "@mui/material";
import { Divider } from "@mui/material";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <Todo
                            id={todo.id}
                            task={todo.task}
                            key={todo.id}
                            completed={todo.completed}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;