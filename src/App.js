import {useState} from 'react';
import './css/App.css';
import './css/theme-dark.css';
import './css/theme-light.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ModeButtons from './components/ModeButtons/ModeButtons';


function App() {

  const themeOptions = [
    {themeName: "dark", key: 0},
    {themeName: "light", key: 1},
  ];

  const [theme, setTheme] = useState("light");

  function getTheme(newTheme) {
    setTheme(newTheme);
  };

  const appClassName = "App " + theme;

  return (
    <div className={appClassName}>
      <ModeButtons getTheme={getTheme} themeOptions={themeOptions} initialState={theme} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
