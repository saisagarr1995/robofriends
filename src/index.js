import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './index.css';
import App from './containers/App'
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'

// ReactDOM.render(
// <React.StrictMode>   
// </React.StrictMode>,
// );
ReactDOM.render(<App />, document.getElementById('root'));


reportWebVitals();
