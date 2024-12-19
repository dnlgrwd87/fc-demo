import { useState, useRef, useEffect } from 'react';
import { useTodo } from '../contexts/TodoContext';
import { useTheme } from '../../contexts/ThemeContext';

export const TodoItem = ({ todo }) => {
    const { toggleTodo, deleteTodo, editTodo } = useTodo();
    const { isDark } = useTheme();
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef(null);

    // we do this in a useEffect instead of calling it directly in the onDoubleClick event handler
    // because the input won't be in the DOM until the next render after isEditing is set to true.
    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editText.trim()) {
            editTodo(todo.id, editText);
            setIsEditing(false);
        }
    };

    return (
        <div
            className={`flex items-center gap-2 p-2 border rounded mb-2 ${
                isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
            }`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="h-5 w-5"
            />

            {isEditing ? (
                <form onSubmit={handleSubmit} className="flex-1">
                    <input
                        ref={inputRef}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className={`w-full px-2 py-1 rounded ${
                            isDark
                                ? 'bg-gray-600 border-gray-500 text-gray-100'
                                : 'bg-white border-gray-300'
                        }`}
                        onBlur={handleSubmit}
                    />
                </form>
            ) : (
                <span
                    className={`flex-1 ${
                        todo.completed
                            ? 'line-through text-gray-500'
                            : isDark
                              ? 'text-gray-100'
                              : 'text-gray-800'
                    }`}
                    onDoubleClick={() => setIsEditing(true)}
                >
                    {todo.text}
                </span>
            )}

            <button
                onClick={() => deleteTodo(todo.id)}
                className={`px-2 py-1 rounded ${
                    isDark
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
            >
                Delete
            </button>
        </div>
    );
};
