import { useTodo } from './TodoContext';
import { useTheme } from '../ThemeContext';
import { TodoList } from './TodoList';

export const TodoDashboard = () => {
    const { todos, isLoading } = useTodo();
    const { isDark } = useTheme();

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    const completionRate = totalTodos ? Math.round((completedTodos / totalTodos) * 100) : 0;
    if (isLoading) {
        return (
            <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <div className="max-w-4xl mx-auto p-6">
                    <div className="animate-pulse">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {[1, 2, 3].map((n) => (
                                <div key={n} className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} h-32 rounded-lg`}></div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map((n) => (
                                <div key={n} className={`h-16 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'} ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
            <div className="max-w-4xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
                        <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Total Tasks</h3>
                        <p className="text-3xl font-bold text-blue-500">{totalTodos}</p>
                    </div>
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
                        <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Completed</h3>
                        <p className="text-3xl font-bold text-green-500">{completedTodos}</p>
                    </div>
                    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}>
                        <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Completion Rate</h3>
                        <p className="text-3xl font-bold text-purple-500">{completionRate}%</p>
                    </div>
                </div>

                <TodoList />
            </div>
        </div>
    );
};
