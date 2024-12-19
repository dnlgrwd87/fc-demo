import { useTheme } from './ThemeContext';
import { useCount } from './CountContext';
import { useMemo } from 'react';

export const Homepage = () => {
    const { isDark } = useTheme();
    const { count, increment, reset } = useCount();

    const squaredValue = useMemo(() => {
        return count ** 2;
    }, [count]);

    return (
        <div className={`min-h-screen flex justify-center p-6 ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-blue-500 text-white'}`}>
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">React Features Demo</h1>

                <div className="mb-6">
                    <p className="text-xl mb-2">Count: {count}</p>
                    <p className="mb-2">Squared value (memoized): {squaredValue}</p>
                    <button
                        onClick={increment}
                        className={`${isDark ? 'bg-gray-200 text-gray-800' : 'bg-white text-blue-500'} px-4 py-2 rounded mr-2 hover:bg-opacity-90`}
                    >
                        Increment
                    </button>
                    <button
                        onClick={reset}
                        className={`${isDark ? 'bg-gray-200 text-gray-800' : 'bg-white text-blue-500'} px-4 py-2 rounded hover:bg-opacity-90`}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}