import React from 'react';
import './App.css';
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import {ITodoItem} from "./types/types";
import {TodoListProvider} from "./context/TodoListProvider";

const App: React.FC = () => {
    const items: ITodoItem[] = [
        {
            id: 1,
            text: "text1",
            isChecked: false
        },
        {
            id: 2,
            text: "text2",
            isChecked: false
        }
    ]

  return (
    <div className="App">
      <TodoListProvider>
          <TodoInput/>
          <TodoList items={items}/>
      </TodoListProvider>
    </div>
  );
}

export default App;
