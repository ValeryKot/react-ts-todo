import { useState, useEffect, useRef } from "react"
import { ITodo } from "../types/data"
import { TodoList } from "./TodoList";

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            completed: false
        }])
    }
    return (
      <div>
        <div>
          <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
          <button onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos} />
      </div>
    );
}

export {App}