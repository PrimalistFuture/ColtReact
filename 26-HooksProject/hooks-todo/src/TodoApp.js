import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';

function TodoApp() {
    const initialTodos = [
        { id: 1, task: "Go for a walk", completed: false },
        { id: 2, task: "Learn React", completed: false },
        { id: 3, task: "Shave", completed: false },
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
    }
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar colors='primary' position="static" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>Todos with Hooks!</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </Paper>
    );
}

export default TodoApp;