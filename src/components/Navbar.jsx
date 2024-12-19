import { useTheme } from '../contexts/ThemeContext';

export const Navbar = () => {
    const { toggleTheme, isDark } = useTheme();

    return (
        <nav className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 shadow-lg`}>
            <div className="container mx-auto flex justify-between items-center">
                <h1 className={`${isDark ? 'text-white' : 'text-gray-900'} text-xl font-bold`}>
                    Functional Components Demo
                </h1>

                <button
                    onClick={toggleTheme}
                    className={`${
                        isDark
                            ? 'text-white hover:bg-gray-900 border-gray-700'
                            : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                    } px-3 border py-1 rounded-md transition-colors`}
                >
                    {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
        </nav>
    );
};
