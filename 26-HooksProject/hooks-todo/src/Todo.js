import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { ListItemSecondaryAction } from "@mui/material";
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggleIsEditing] = useToggleState(false);
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    editTodo={editTodo}
                    task={task}
                    toggleIsEditing={toggleIsEditing}
                />
            ) : (
                <>
                    <Checkbox
                        tabIndex={-1}
                        checked={completed}
                        onClick={() => toggleTodo(id)}
                    />
                    <ListItemText
                        style={{ textDecoration: completed ? "line-through" : "none" }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction >
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="Edit" onClick={toggleIsEditing}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default Todo;