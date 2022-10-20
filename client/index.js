import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.jsx';
import { Provider } from 'react-redux';
import store from './store';
import { getPlants } from './getPlants';

import styles from './styles/styles.scss';

store.dispatch(getPlants);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
