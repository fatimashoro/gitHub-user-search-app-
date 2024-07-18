import { UserSearchMainPage } from './components/context/UserSearchMainPage';
import { APiContextProvider } from './components/context/APIContext';
import { ThemeProvider } from './components/context/APIContext';
import './App.css';
function App() {

  return (
    <ThemeProvider>
      <APiContextProvider>
        <UserSearchMainPage />
      </APiContextProvider>
    </ThemeProvider>
 );
}

export default App;
