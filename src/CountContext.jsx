import { createContext, useContext, useState, useCallback } from 'react';

const CountContext = createContext();

export const useCount = () => useContext(CountContext);

export function CountProvider({ children }) {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prev => prev - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(0);
    }, []);

    const value = {
        count,
        increment,
        decrement,
        reset,
    };

    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    );
}
