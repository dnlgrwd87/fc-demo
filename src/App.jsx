import { Navbar } from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import { TodoProvider } from './todos/contexts/TodoContext';
import { TodoDashboard } from './todos/components/TodoDashboard';

function App() {
    return (
        <ThemeProvider>
            <TodoProvider>
                <Navbar />
                <TodoDashboard />
            </TodoProvider>
        </ThemeProvider>
    );
}

export default App;
