import { createContext, useContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

// Simulate API calls
const api = {
    fetchTodos: () =>
        new Promise((resolve) => {
            setTimeout(() => {
                const savedTodos = localStorage.getItem('todos');
                resolve(savedTodos ? JSON.parse(savedTodos) : []);
            }, 1000);
        }),
    saveTodos: (todos) =>
        new Promise((resolve) => {
            setTimeout(() => {
                localStorage.setItem('todos', JSON.stringify(todos));
                resolve();
            }, 300);
        }),
};

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Initial fetch of todos
    useEffect(() => {
        const fetchTodos = async () => {
            const data = await api.fetchTodos();
            setTodos(data);
            setIsLoading(false);
        };

        fetchTodos();
    }, []);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos(prev => [...prev, newTodo]);
        api.saveTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        const newTodos = todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        api.saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        api.saveTodos(newTodos);
    };

    const editTodo = (id, text) => {
        const newTodos = todos.map((todo) => 
            todo.id === id ? { ...todo, text } : todo
        );
        setTodos(newTodos);
        api.saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                toggleTodo,
                deleteTodo,
                editTodo,
                isLoading,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
