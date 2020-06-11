import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Routes from './Routes';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
