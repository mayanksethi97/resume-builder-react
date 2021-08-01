import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import { AnalyticsContextProvider } from './store/AnalyticsContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AnalyticsContextProvider>
        <App />
     </AnalyticsContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
