import React from "react";
import {ITodoItem} from "../../types/types";
import {
    Container,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Checkbox,
    ListItemIcon
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {useTodoList} from "../../context/TodoListProvider";

interface ITodoListProps {
    items: ITodoItem[];
}

const TodoList: React.FC<ITodoListProps> = ({items}) => {
    const {todoList, removeItem, handleChecked} = useTodoList();

    return(
        <Container>
            <List>
                {todoList.map((item: ITodoItem) => {
                    return (
                        <ListItem
                            key={item.id}
                            divider>
                            <ListItemIcon>
                                <Checkbox
                                    checked={item.isChecked}
                                    onChange={(e)=>handleChecked(e, item.id)}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                style={{ textDecoration : item.isChecked ? 'line-through' : 'none' }}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={()=>{removeItem(item.id)}}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                }).reverse()}
            </List>
        </Container>
    )
}

export default TodoList;