import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import App_42 from './App_42.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <App_42 />
    </StyleSheetManager>
  </React.StrictMode>
);
