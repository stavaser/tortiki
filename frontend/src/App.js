import React from 'react';
import 'antd/dist/antd.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Navbar from './components/navbar';

import Login from './pages/login';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={'/'} component={Main} />
        <Route exact path={'/login'} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
