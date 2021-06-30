import React from 'react';
import 'antd/dist/antd.less';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
