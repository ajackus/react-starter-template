import React from 'react';
import { AppRouter } from './routes/routes'
import './App.less'
import { store } from './appRedux/store';
import { Provider } from 'react-redux';
import Loader from './components/loader';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <Loader />
    </Provider>
  );
}

export default App;

