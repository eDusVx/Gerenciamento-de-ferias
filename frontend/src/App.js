import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar>
        <Route>
            <Route path='/' />
        </Route>
        </Navbar>
      </Router>
      <Footer/>
      <Profile />
    </>
  );
}

export default App;
