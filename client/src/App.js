import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;