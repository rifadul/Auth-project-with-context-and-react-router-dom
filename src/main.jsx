import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import { ContextProviders } from './context/ContextProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProviders>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ContextProviders>
    </BrowserRouter>
  </React.StrictMode>,
)
