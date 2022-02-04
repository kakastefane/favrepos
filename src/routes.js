import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/repository/:repository' component={Repository} />
    </BrowserRouter>
  );
}