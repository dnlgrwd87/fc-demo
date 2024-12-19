import { useTodo } from '../contexts/TodoContext';
import { useTheme } from '../../contexts/ThemeContext';
import { TodoList } from './TodoList';
import { TodoStats } from './TodoStats';

export const TodoDashboard = () => {
    const { isLoading } = useTodo();
    const { isDark } = useTheme();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-y-2 border-gray-500" />
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'} ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
            <div className="max-w-4xl mx-auto p-6">
                <TodoStats />
                <TodoList />
            </div>
        </div>
    );
};
