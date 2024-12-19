import { useTodo } from '../contexts/TodoContext';
import { useTheme } from '../../contexts/ThemeContext';

export const TodoStats = () => {
    const { todos } = useTodo();
    const { isDark } = useTheme();

    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const completionRate = totalTodos ? Math.round((completedTodos / totalTodos) * 100) : 0;

    const stats = [
        {
            title: 'Total Tasks',
            value: totalTodos,
            color: 'text-blue-500'
        },
        {
            title: 'Completed',
            value: completedTodos,
            color: 'text-green-500'
        },
        {
            title: 'Completion Rate',
            value: `${completionRate}%`,
            color: 'text-purple-500'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow`}
                >
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {stat.title}
                    </h3>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
            ))}
        </div>
    );
};
