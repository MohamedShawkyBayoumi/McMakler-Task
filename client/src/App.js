import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { ReactComponent as BackIcon } from './assets/images/ic/arrow/back.svg';
import { ReactComponent as SearchIcon } from './assets/images/ic/search.svg';
import { ReactComponent as ArrowDownIcon } from './assets/images/ic/arrow_drop_down.svg';
import MainStatistics from './components/MainStatistics';
import axios from 'axios';
import Section from './components/Section';
import { useDebounce } from './utils/debounce';
import Home from './pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

 

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page/" component={Home} />
      </Switch>
        
    </BrowserRouter>
  );
}

export default App;