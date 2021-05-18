import React, {useState} from "react";
import {Button, TextField, FormControl, Container} from "@material-ui/core";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import {useTodoList} from "../../context/TodoListProvider";

const TodoInput: React.FC = () => {
    const [inputText, setInputText] = useState<string>("");
    const {addItem} = useTodoList();
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement> ) : void => {
        const text: string = e.target.value;
        setInputText(text);
    }

    const submitHandler = (e: React.FormEvent) : void => {
        e.preventDefault();
        if(inputText !== "") {
            addItem(inputText);
            setInputText("");
        }
    }

    return(
        <Container>
            <form onSubmit={submitHandler}>
                <FormControl
                    fullWidth>
                    <TextField
                        label="Write your task here."
                        variant="outlined"
                        id="todo-text"
                        name="todo-text"
                        value={inputText}
                        onChange={inputHandler}
                        margin="normal"
                        required={true}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        <PlaylistAddIcon/>
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TodoInput;