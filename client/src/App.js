import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NavBar, Heading } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <NavBar />
        <Heading />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
