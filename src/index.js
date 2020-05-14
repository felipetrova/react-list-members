import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/Global'
import LibsStyle from './styles/Libs';
import GlobalFonts from './styles/Fonts';

import App from './pages/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <LibsStyle />
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
