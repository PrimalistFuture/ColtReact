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
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const initialTodos = [
        { id: uuidv4(), task: "Go for a walk", completed: false },
        { id: uuidv4(), task: "Learn React", completed: false },
        { id: uuidv4(), task: "Shave", completed: true },
    ]

    const [todos, setTodos] = useState(initialTodos);

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    };

    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }

    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
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
            <Grid container justifyContent='center' style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;