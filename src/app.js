import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListManager from './components/ListManager';
import rootReducer from './reducers';
import './app.css';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store={store}>
      <ListManager />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
