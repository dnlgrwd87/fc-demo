import './App.css';
import { Homepage } from './Homepage';
import { Navbar } from './Navbar';
import { ThemeProvider } from './ThemeContext';
import { CountProvider } from './CountContext';
function App() {
  return (
    <ThemeProvider>
      <CountProvider>
        <Navbar />
        <Homepage />
      </CountProvider>
    </ThemeProvider>
  );
}

export default App;
