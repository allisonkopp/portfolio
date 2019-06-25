import React from 'react';
import AppBar from 'material-ui/AppBar';
import './NavBar.css';

const NavBar = props => <AppBar title={<span className="logo">{'Allison Kopp'}</span>} className="nav-bar" />;

export default NavBar;
