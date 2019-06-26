import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { NavBar, Heading, About, Projects, Technologies } from './components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const App = _ => {
  return (
    <div className="App">
      <MuiThemeProvider>
        <NavBar />
        <Heading />
        <About />
        <Technologies />
        <Projects />
      </MuiThemeProvider>
    </div>
  );
};

export default withRouter(App);
