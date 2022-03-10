import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider domain="tejasc0-dev.jp.auth0.com" clientId="gBUacsI73aCOlDp4v4WZv482m0GmBy8B" redirectUri={window.location.origin}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

