import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import ListManager from './components/ListManager';

function App() {
  return <ListManager />;
}

ReactDOM.render(<App />, document.getElementById('root'));
