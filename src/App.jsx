import { Navbar } from './Navbar';
import { ThemeProvider } from './ThemeContext';
import { TodoProvider } from './todos/TodoContext';
import { TodoDashboard } from './todos/TodoDashboard';

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