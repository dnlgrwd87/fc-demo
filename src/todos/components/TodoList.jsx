import { useState, useRef, useEffect } from 'react';
import { useTodo } from '../contexts/TodoContext';
import { useTheme } from '../../contexts/ThemeContext';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todos, addTodo } = useTodo();
    const { isDark } = useTheme();
    const [newTodo, setNewTodo] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    return (
        <div className={`max-w-md mx-auto p-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow`}>
            <div className="flex flex-col mb-4">
                <h1 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                    Todo List
                </h1>
                <div className="text-sm text-gray-500">Double click an item to edit it</div>
            </div>
            
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="flex gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new todo..."
                        className={`flex-1 px-3 py-2 border rounded ${
                            isDark ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300'
                        }`}
                    />
                    <button
                        type="submit"
                        className={`px-4 py-2 rounded ${
                            isDark 
                                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                        }`}
                    >
                        Add
                    </button>
                </div>
            </form>

            <div>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};
