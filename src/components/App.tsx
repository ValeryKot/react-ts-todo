import { useState, useEffect, useRef } from "react"
import { ITodo } from "../types/data"
import { TodoList } from "./TodoList";

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value);
    };

    const addTodo = () => {
        setTodos([...todos, {
            id: Date.now(),
            title: value,
            completed: false
        }])
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter') addTodo();
    };

    const removeTodo = (id: number): void => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number): void => {
      setTodos(
        todos.map((todo) => {
          if (todo.id !== id) return todo;
          return {
            ...todo,
            completed: !todo.completed,
          };
        })
      );
    };

    useEffect(() => {
      if (inputRef.current) inputRef.current.focus(); // проверяет наличие инпута и устанавливает фокус на него
    }, []);

    return (
      <div>
        <div>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <TodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    );
}

export {App}