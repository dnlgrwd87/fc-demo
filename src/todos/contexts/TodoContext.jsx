import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const TodoContext = createContext();

// Simulate API calls
const api = {
    fetchTodos: () => new Promise((resolve) => {
        setTimeout(() => {
            const savedTodos = localStorage.getItem('todos');
            resolve(savedTodos ? JSON.parse(savedTodos) : []);
        }, 1000);
    }),
    saveTodos: (todos) => new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(todos));
            resolve();
        }, 300);
    })
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

    // Save todos whenever they change
    useEffect(() => {
        if (!isLoading) {
            api.saveTodos(todos);
        }
    }, [todos, isLoading]);

    const addTodo = useCallback((text) => {
        setTodos(prev => [...prev, {
            id: Date.now(),
            text,
            completed: false
        }]);
    }, []);

    const toggleTodo = useCallback((id) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }, []);

    const editTodo = useCallback((id, text) => {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, text } : todo
        ));
    }, []);

    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            toggleTodo,
            deleteTodo,
            editTodo,
            isLoading,
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
};
