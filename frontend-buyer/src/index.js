import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Init VK  Mini App
bridge.send('VKWebAppInit');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
