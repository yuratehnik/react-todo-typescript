import React, {createContext, useContext, useState} from "react";
import {ITodoItem, IProps, ContextValue} from "../types/types";

const TodoListContext : ContextValue = createContext(null);


const TodoListProvider: React.FC<IProps> = (props) => {
    const [todoList, setTodoList] = useState<Array<ITodoItem>>([]);

    const addTodo = (text: string) => {
        setTodoList(prev => {
            const newItem: ITodoItem = {
                text,
                isChecked: false,
                id: new Date().getTime()
            }
            return [...prev, newItem]
        })
    }

    const removeTodo = (id: number) => {
        let newArray = [...todoList];
        const itemIndex = newArray.findIndex((item) => item.id === id)
        newArray.splice(itemIndex, 1);
        setTodoList(prev => {
            return [...newArray]
        })
    }

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>, id: number): void => {
        const newCheckedStatus = e.target.checked;
        const newArray = todoList.map((item)=>{
            if(item.id === id) {
                item.isChecked = newCheckedStatus;
            }
            return item;
        })

        setTodoList(() => {
            return [...newArray]
        });
    }

    return(
        <TodoListContext.Provider value={{
            todoList: todoList,
            addItem: addTodo,
            removeItem: removeTodo,
            handleChecked: handleChecked
        }}>
            {props.children}
        </TodoListContext.Provider>
    )
}

const useTodoList = () => {
    return useContext(TodoListContext);
}

export {TodoListProvider, useTodoList}