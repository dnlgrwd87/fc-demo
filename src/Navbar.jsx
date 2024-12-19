import { useTheme } from './ThemeContext';

export const Navbar = () => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <nav className={`${isDark ? 'bg-gray-900' : 'bg-blue-600'} p-4 shadow-lg`}>
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl font-bold">React Demo</h1>

                <div className="flex items-center gap-4">
                    <span className="text-white">
                        {theme} mode
                    </span>
                    <button
                        onClick={toggleTheme}
                        className={`${isDark
                                ? 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                                : 'bg-white text-blue-600 hover:bg-blue-50'
                            } px-3 py-1 rounded-md transition-colors`}
                    >
                        {isDark ? '☀️ Light' : '🌙 Dark'}
                    </button>
                </div>
            </div>
        </nav>
    );
}